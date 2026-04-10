import type { SharePointItem } from '../../../domain/types/entities'
import type { PeriodStatus } from '../../../domain/constants/status'
import { mapperParsers } from './shared'

export interface SharePointPeriodControlFields {
  Reference: string
  StartsAt: string
  EndsAt: string
  Status: PeriodStatus
}

export interface PeriodControlContract {
  id: string
  reference: string
  startsAt: string
  endsAt: string
  status: PeriodStatus
}

export const mapPeriodControlFromSharePoint = (
  item: SharePointItem<SharePointPeriodControlFields>,
): PeriodControlContract => ({
  id: String(item.id),
  reference: mapperParsers.asString(item.fields.Reference),
  startsAt: mapperParsers.asString(item.fields.StartsAt),
  endsAt: mapperParsers.asString(item.fields.EndsAt),
  status: item.fields.Status,
})

export const mapPeriodControlToSharePoint = (
  contract: PeriodControlContract,
): SharePointPeriodControlFields => ({
  Reference: contract.reference,
  StartsAt: contract.startsAt,
  EndsAt: contract.endsAt,
  Status: contract.status,
})
