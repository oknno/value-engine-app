import {
  mapPeriodControlFromSharePoint,
  mapPeriodControlToSharePoint,
  type PeriodControlContract,
  type SharePointPeriodControlFields,
} from '../../../lib/sharepoint/mappers/periodControlMapper'
import { buildListService, type ListItemsQuery } from './baseListService'

export const PERIOD_CONTROL_LIST_TITLE = 'PeriodControl'

const basePeriodControlService = buildListService(PERIOD_CONTROL_LIST_TITLE, 'SP.Data.PeriodControlListItem')

export const periodControlService = {
  ...basePeriodControlService,

  async getContracts(query: ListItemsQuery): Promise<PeriodControlContract[]> {
    const items = await basePeriodControlService.getItems<SharePointPeriodControlFields>(query)
    return items.map(mapPeriodControlFromSharePoint)
  },

  async createContract(contract: PeriodControlContract) {
    return basePeriodControlService.createItem<SharePointPeriodControlFields>(mapPeriodControlToSharePoint(contract))
  },

  async updateContract(id: number, contract: Partial<PeriodControlContract>) {
    const mapped = mapPeriodControlToSharePoint(contract as PeriodControlContract)
    return basePeriodControlService.updateItem<SharePointPeriodControlFields>(id, mapped)
  },
}
