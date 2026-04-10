import { ensureConfig } from '../../app/bootstrap/appConfig'
import type { HttpRequestOptions } from '../../domain/types/entities'
import { createSpApiError, normalizeSpUnexpectedError } from './spErrorHandler'
import { buildSpQueryString, type SpQueryParams } from './spQueryBuilder'

type SpResponseType = 'json' | 'text'

export interface SpRequestOptions extends HttpRequestOptions {
  query?: SpQueryParams
  responseType?: SpResponseType
}

const buildSpUrl = (path: string, query?: SpQueryParams): string => {
  const { sharePointSiteUrl } = ensureConfig()
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const baseUrl = `${sharePointSiteUrl}${normalizedPath}`

  if (!query) {
    return baseUrl
  }

  const queryString = buildSpQueryString(query)
  return `${baseUrl}?${queryString}`
}

export const spClient = {
  async request<TResponse>(path: string, options: SpRequestOptions = {}): Promise<TResponse> {
    const { requestTimeoutMs } = ensureConfig()
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), requestTimeoutMs)

    try {
      const response = await fetch(buildSpUrl(path, options.query), {
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
        throw createSpApiError(response.status, details)
      }

      if (options.responseType === 'text') {
        return (await response.text()) as TResponse
      }

      return (await response.json()) as TResponse
    } catch (error) {
      throw normalizeSpUnexpectedError(error)
    } finally {
      clearTimeout(timeoutId)
    }
  },

  get<TResponse>(path: string, query: SpQueryParams): Promise<TResponse> {
    return this.request<TResponse>(path, { method: 'GET', query })
  },
}
