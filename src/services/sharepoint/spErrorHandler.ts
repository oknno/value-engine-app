import type { ApiError } from '../../domain/types/entities'

export const createSpApiError = (status: number, details: unknown): ApiError => ({
  status,
  details,
  message: `SharePoint request failed with status ${status}.`,
})

export const normalizeSpUnexpectedError = (error: unknown): ApiError => {
  if (typeof error === 'object' && error !== null && 'message' in error) {
    return error as ApiError
  }

  return { message: 'Unexpected error while requesting SharePoint.' }
}
