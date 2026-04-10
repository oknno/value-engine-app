import type { SharePointItem } from '../../../domain/types/entities'
import { mapperParsers } from './shared'

export interface SharePointResultMonthlyFields {
  PeriodRef: string
  ResultCode: string
  Amount: number
  Currency: string
}

export interface ResultMonthlyContract {
  id: string
  periodRef: string
  resultCode: string
  amount: number
  currency: string
}

export const mapResultMonthlyFromSharePoint = (
  item: SharePointItem<SharePointResultMonthlyFields>,
): ResultMonthlyContract => ({
  id: String(item.id),
  periodRef: mapperParsers.asString(item.fields.PeriodRef),
  resultCode: mapperParsers.asString(item.fields.ResultCode),
  amount: mapperParsers.asNumber(item.fields.Amount),
  currency: mapperParsers.asString(item.fields.Currency),
})

export const mapResultMonthlyToSharePoint = (
  contract: ResultMonthlyContract,
): SharePointResultMonthlyFields => ({
  PeriodRef: contract.periodRef,
  ResultCode: contract.resultCode,
  Amount: contract.amount,
  Currency: contract.currency,
})
