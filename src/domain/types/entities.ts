export type EntityId = string

export type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'

export interface ApiError {
  message: string
  status?: number
  details?: unknown
}

export interface HttpRequestOptions {
  method?: HttpMethod
  headers?: HeadersInit
  body?: BodyInit | null
}

export interface SharePointItem<TFields = Record<string, unknown>> {
  id: number
  fields: TFields
}

export interface SharePointListResponse<TFields = Record<string, unknown>> {
  value: Array<SharePointItem<TFields>>
}

export interface DomainEntity {
  id: EntityId
  createdAt: string
  createdBy: string
  updatedAt?: string
  updatedBy?: string
}
