import {
  mapCostMonthlyFromSharePoint,
  mapCostMonthlyToSharePoint,
  type CostMonthlyContract,
  type SharePointCostMonthlyFields,
} from '../../../lib/sharepoint/mappers/costMonthlyMapper'
import { buildListService, type ListItemsQuery } from './baseListService'

export const COST_MONTHLY_LIST_TITLE = 'CostMonthly'

const baseCostMonthlyService = buildListService(COST_MONTHLY_LIST_TITLE, 'SP.Data.CostMonthlyListItem')

export const costMonthlyService = {
  ...baseCostMonthlyService,

  async getContracts(query: ListItemsQuery): Promise<CostMonthlyContract[]> {
    const items = await baseCostMonthlyService.getItems<SharePointCostMonthlyFields>(query)
    return items.map(mapCostMonthlyFromSharePoint)
  },

  async createContract(contract: CostMonthlyContract) {
    return baseCostMonthlyService.createItem<SharePointCostMonthlyFields>(mapCostMonthlyToSharePoint(contract))
  },

  async updateContract(id: number, contract: Partial<CostMonthlyContract>) {
    const mapped = mapCostMonthlyToSharePoint(contract as CostMonthlyContract)
    return baseCostMonthlyService.updateItem<SharePointCostMonthlyFields>(id, mapped)
  },
}
