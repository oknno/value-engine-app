import type { SharePointItem } from '../../../domain/types/entities'
import { mapperParsers } from './shared'

export interface SharePointInputMonthlyFields {
  PeriodRef: string
  DriverCode: string
  Amount: number
  Unit: string
}

export interface InputMonthlyContract {
  id: string
  periodRef: string
  driverCode: string
  amount: number
  unit: string
}

export const mapInputMonthlyFromSharePoint = (
  item: SharePointItem<SharePointInputMonthlyFields>,
): InputMonthlyContract => ({
  id: String(item.id),
  periodRef: mapperParsers.asString(item.fields.PeriodRef),
  driverCode: mapperParsers.asString(item.fields.DriverCode),
  amount: mapperParsers.asNumber(item.fields.Amount),
  unit: mapperParsers.asString(item.fields.Unit),
})

export const mapInputMonthlyToSharePoint = (contract: InputMonthlyContract): SharePointInputMonthlyFields => ({
  PeriodRef: contract.periodRef,
  DriverCode: contract.driverCode,
  Amount: contract.amount,
  Unit: contract.unit,
})
