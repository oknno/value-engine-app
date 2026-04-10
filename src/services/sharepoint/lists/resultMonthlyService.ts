import {
  mapResultMonthlyFromSharePoint,
  mapResultMonthlyToSharePoint,
  type ResultMonthlyContract,
  type SharePointResultMonthlyFields,
} from '../../../lib/sharepoint/mappers/resultMonthlyMapper'
import { buildListService, type ListItemsQuery } from './baseListService'

export const RESULT_MONTHLY_LIST_TITLE = 'ResultMonthly'

const baseResultMonthlyService = buildListService(RESULT_MONTHLY_LIST_TITLE, 'SP.Data.ResultMonthlyListItem')

export const resultMonthlyService = {
  ...baseResultMonthlyService,

  async getContracts(query: ListItemsQuery): Promise<ResultMonthlyContract[]> {
    const items = await baseResultMonthlyService.getItems<SharePointResultMonthlyFields>(query)
    return items.map(mapResultMonthlyFromSharePoint)
  },

  async createContract(contract: ResultMonthlyContract) {
    return baseResultMonthlyService.createItem<SharePointResultMonthlyFields>(mapResultMonthlyToSharePoint(contract))
  },

  async updateContract(id: number, contract: Partial<ResultMonthlyContract>) {
    const mapped = mapResultMonthlyToSharePoint(contract as ResultMonthlyContract)
    return baseResultMonthlyService.updateItem<SharePointResultMonthlyFields>(id, mapped)
  },
}
