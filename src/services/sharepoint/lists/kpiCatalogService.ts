import {
  mapKpiCatalogFromSharePoint,
  mapKpiCatalogToSharePoint,
  type KpiCatalogContract,
  type SharePointKpiCatalogFields,
} from '../../../lib/sharepoint/mappers/kpiCatalogMapper'
import { buildListService, type ListItemsQuery } from './baseListService'

export const KPI_CATALOG_LIST_TITLE = 'KpiCatalog'

const baseKpiCatalogService = buildListService(KPI_CATALOG_LIST_TITLE, 'SP.Data.KpiCatalogListItem')

export const kpiCatalogService = {
  ...baseKpiCatalogService,

  async getContracts(query: ListItemsQuery): Promise<KpiCatalogContract[]> {
    const items = await baseKpiCatalogService.getItems<SharePointKpiCatalogFields>(query)
    return items.map(mapKpiCatalogFromSharePoint)
  },

  async createContract(contract: KpiCatalogContract) {
    return baseKpiCatalogService.createItem<SharePointKpiCatalogFields>(mapKpiCatalogToSharePoint(contract))
  },

  async updateContract(id: number, contract: Partial<KpiCatalogContract>) {
    const mapped = mapKpiCatalogToSharePoint(contract as KpiCatalogContract)
    return baseKpiCatalogService.updateItem<SharePointKpiCatalogFields>(id, mapped)
  },
}
