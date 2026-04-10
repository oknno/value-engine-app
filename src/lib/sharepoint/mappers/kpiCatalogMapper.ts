import type { SharePointItem } from '../../../domain/types/entities'
import type { KpiDirection } from '../../../domain/constants/kpiDirection'
import { mapperParsers } from './shared'

export interface SharePointKpiCatalogFields {
  KpiCode: string
  KpiName: string
  Direction: KpiDirection
  Unit: string
}

export interface KpiCatalogContract {
  id: string
  code: string
  name: string
  direction: KpiDirection
  unit: string
}

export const mapKpiCatalogFromSharePoint = (
  item: SharePointItem<SharePointKpiCatalogFields>,
): KpiCatalogContract => ({
  id: String(item.id),
  code: mapperParsers.asString(item.fields.KpiCode),
  name: mapperParsers.asString(item.fields.KpiName),
  direction: item.fields.Direction,
  unit: mapperParsers.asString(item.fields.Unit),
})

export const mapKpiCatalogToSharePoint = (contract: KpiCatalogContract): SharePointKpiCatalogFields => ({
  KpiCode: contract.code,
  KpiName: contract.name,
  Direction: contract.direction,
  Unit: contract.unit,
})
