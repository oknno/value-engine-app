import type { SharePointItem } from '../../../domain/types/entities'
import type { WorkflowStatus } from '../../../domain/constants/status'
import { mapperParsers } from './shared'

export interface SharePointStatusHistoryFields {
  ChangedAt: string
  PreviousStatus: WorkflowStatus
  CurrentStatus: WorkflowStatus
  ChangedBy: string
  Reason: string
}

export interface StatusHistoryContract {
  id: string
  changedAt: string
  previousStatus: WorkflowStatus
  currentStatus: WorkflowStatus
  changedBy: string
  reason: string
}

export const mapStatusHistoryFromSharePoint = (
  item: SharePointItem<SharePointStatusHistoryFields>,
): StatusHistoryContract => ({
  id: String(item.id),
  changedAt: mapperParsers.asString(item.fields.ChangedAt),
  previousStatus: item.fields.PreviousStatus,
  currentStatus: item.fields.CurrentStatus,
  changedBy: mapperParsers.asString(item.fields.ChangedBy),
  reason: mapperParsers.asString(item.fields.Reason),
})

export const mapStatusHistoryToSharePoint = (
  contract: StatusHistoryContract,
): SharePointStatusHistoryFields => ({
  ChangedAt: contract.changedAt,
  PreviousStatus: contract.previousStatus,
  CurrentStatus: contract.currentStatus,
  ChangedBy: contract.changedBy,
  Reason: contract.reason,
})
