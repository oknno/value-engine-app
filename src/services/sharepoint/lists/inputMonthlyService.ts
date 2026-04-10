import {
  mapInputMonthlyFromSharePoint,
  mapInputMonthlyToSharePoint,
  type InputMonthlyContract,
  type SharePointInputMonthlyFields,
} from '../../../lib/sharepoint/mappers/inputMonthlyMapper'
import { buildListService, type ListItemsQuery } from './baseListService'

export const INPUT_MONTHLY_LIST_TITLE = 'InputMonthly'

const baseInputMonthlyService = buildListService(INPUT_MONTHLY_LIST_TITLE, 'SP.Data.InputMonthlyListItem')

export const inputMonthlyService = {
  ...baseInputMonthlyService,

  async getContracts(query: ListItemsQuery): Promise<InputMonthlyContract[]> {
    const items = await baseInputMonthlyService.getItems<SharePointInputMonthlyFields>(query)
    return items.map(mapInputMonthlyFromSharePoint)
  },

  async createContract(contract: InputMonthlyContract) {
    return baseInputMonthlyService.createItem<SharePointInputMonthlyFields>(mapInputMonthlyToSharePoint(contract))
  },

  async updateContract(id: number, contract: Partial<InputMonthlyContract>) {
    const mapped = mapInputMonthlyToSharePoint(contract as InputMonthlyContract)
    return baseInputMonthlyService.updateItem<SharePointInputMonthlyFields>(id, mapped)
  },
}
