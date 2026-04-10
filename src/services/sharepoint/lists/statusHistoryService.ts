import {
  mapStatusHistoryFromSharePoint,
  mapStatusHistoryToSharePoint,
  type SharePointStatusHistoryFields,
  type StatusHistoryContract,
} from '../../../lib/sharepoint/mappers/statusHistoryMapper'
import { buildListService, type ListItemsQuery } from './baseListService'

export const STATUS_HISTORY_LIST_TITLE = 'StatusHistory'

const baseStatusHistoryService = buildListService(STATUS_HISTORY_LIST_TITLE, 'SP.Data.StatusHistoryListItem')

export const statusHistoryService = {
  ...baseStatusHistoryService,

  async getContracts(query: ListItemsQuery): Promise<StatusHistoryContract[]> {
    const items = await baseStatusHistoryService.getItems<SharePointStatusHistoryFields>(query)
    return items.map(mapStatusHistoryFromSharePoint)
  },

  async createContract(contract: StatusHistoryContract) {
    return baseStatusHistoryService.createItem<SharePointStatusHistoryFields>(mapStatusHistoryToSharePoint(contract))
  },

  async updateContract(id: number, contract: Partial<StatusHistoryContract>) {
    const mapped = mapStatusHistoryToSharePoint(contract as StatusHistoryContract)
    return baseStatusHistoryService.updateItem<SharePointStatusHistoryFields>(id, mapped)
  },
}
