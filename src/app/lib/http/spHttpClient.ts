import { ensureConfig } from '../../bootstrap/appConfig'
import type { ApiError, HttpRequestOptions } from '../../../domain/types/entities'

const buildUrl = (path: string): string => {
  const { sharePointSiteUrl } = ensureConfig()
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${sharePointSiteUrl}${normalizedPath}`
}

const normalizeError = (status: number, details: unknown): ApiError => ({
  status,
  details,
  message: `SharePoint request failed with status ${status}.`,
})

export const spHttpClient = {
  async request<TResponse>(path: string, options: HttpRequestOptions = {}): Promise<TResponse> {
    const { requestTimeoutMs } = ensureConfig()
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), requestTimeoutMs)

    try {
      const response = await fetch(buildUrl(path), {
        method: options.method ?? 'GET',
        headers: {
          Accept: 'application/json;odata=nometadata',
          ...options.headers,
        },
        body: options.body,
        signal: controller.signal,
      })

      if (!response.ok) {
        const details = await response.text()
        throw normalizeError(response.status, details)
      }

      return (await response.json()) as TResponse
    } catch (error) {
      if (typeof error === 'object' && error !== null && 'message' in error) {
        throw error
      }

      throw { message: 'Unexpected error while requesting SharePoint.' } as ApiError
    } finally {
      clearTimeout(timeoutId)
    }
  },

  get<TResponse>(path: string): Promise<TResponse> {
    return this.request<TResponse>(path, { method: 'GET' })
  },
}
