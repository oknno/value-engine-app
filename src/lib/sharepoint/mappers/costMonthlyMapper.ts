import type { SharePointItem } from '../../../domain/types/entities'
import { mapperParsers } from './shared'

export interface SharePointCostMonthlyFields {
  PeriodRef: string
  CostCenterCode: string
  Amount: number
  Currency: string
}

export interface CostMonthlyContract {
  id: string
  periodRef: string
  costCenterCode: string
  amount: number
  currency: string
}

export const mapCostMonthlyFromSharePoint = (
  item: SharePointItem<SharePointCostMonthlyFields>,
): CostMonthlyContract => ({
  id: String(item.id),
  periodRef: mapperParsers.asString(item.fields.PeriodRef),
  costCenterCode: mapperParsers.asString(item.fields.CostCenterCode),
  amount: mapperParsers.asNumber(item.fields.Amount),
  currency: mapperParsers.asString(item.fields.Currency),
})

export const mapCostMonthlyToSharePoint = (contract: CostMonthlyContract): SharePointCostMonthlyFields => ({
  PeriodRef: contract.periodRef,
  CostCenterCode: contract.costCenterCode,
  Amount: contract.amount,
  Currency: contract.currency,
})
