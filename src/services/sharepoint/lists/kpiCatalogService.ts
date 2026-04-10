import { buildListService } from './baseListService'

export const KPI_CATALOG_LIST_TITLE = 'KpiCatalog'
export const kpiCatalogService = buildListService(KPI_CATALOG_LIST_TITLE, 'SP.Data.KpiCatalogListItem')
