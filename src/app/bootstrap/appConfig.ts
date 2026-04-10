export interface AppConfig {
  sharePointSiteUrl: string
  requestTimeoutMs: number
}

const DEFAULT_TIMEOUT_MS = 15_000

export const appConfig: AppConfig = {
  sharePointSiteUrl: import.meta.env.VITE_SP_SITE_URL ?? '',
  requestTimeoutMs: Number(import.meta.env.VITE_REQUEST_TIMEOUT_MS ?? DEFAULT_TIMEOUT_MS),
}

export const ensureConfig = (): AppConfig => {
  if (!appConfig.sharePointSiteUrl) {
    throw new Error('VITE_SP_SITE_URL is required to call SharePoint APIs.')
  }

  return appConfig
}
