import type { SharePointItem } from '../../../domain/types/entities'
import { mapperParsers } from './shared'

export interface SharePointConversionMonthlyFields {
  PeriodRef: string
  ConversionRate: number
  SourceCurrency: string
  TargetCurrency: string
}

export interface ConversionMonthlyContract {
  id: string
  periodRef: string
  conversionRate: number
  sourceCurrency: string
  targetCurrency: string
}

export const mapConversionMonthlyFromSharePoint = (
  item: SharePointItem<SharePointConversionMonthlyFields>,
): ConversionMonthlyContract => ({
  id: String(item.id),
  periodRef: mapperParsers.asString(item.fields.PeriodRef),
  conversionRate: mapperParsers.asNumber(item.fields.ConversionRate),
  sourceCurrency: mapperParsers.asString(item.fields.SourceCurrency),
  targetCurrency: mapperParsers.asString(item.fields.TargetCurrency),
})

export const mapConversionMonthlyToSharePoint = (
  contract: ConversionMonthlyContract,
): SharePointConversionMonthlyFields => ({
  PeriodRef: contract.periodRef,
  ConversionRate: contract.conversionRate,
  SourceCurrency: contract.sourceCurrency,
  TargetCurrency: contract.targetCurrency,
})
