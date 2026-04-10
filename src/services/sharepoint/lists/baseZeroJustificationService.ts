import {
  mapBaseZeroJustificationFromSharePoint,
  mapBaseZeroJustificationToSharePoint,
  type BaseZeroJustificationContract,
  type SharePointBaseZeroJustificationFields,
} from '../../../lib/sharepoint/mappers/baseZeroJustificationMapper'
import { buildListService, type ListItemsQuery } from './baseListService'

export const BASE_ZERO_JUSTIFICATION_LIST_TITLE = 'BaseZeroJustification'

const baseZeroJustificationListService = buildListService(
  BASE_ZERO_JUSTIFICATION_LIST_TITLE,
  'SP.Data.BaseZeroJustificationListItem',
)

export const baseZeroJustificationService = {
  ...baseZeroJustificationListService,

  async getContracts(query: ListItemsQuery): Promise<BaseZeroJustificationContract[]> {
    const items = await baseZeroJustificationListService.getItems<SharePointBaseZeroJustificationFields>(query)
    return items.map(mapBaseZeroJustificationFromSharePoint)
  },

  async createContract(contract: BaseZeroJustificationContract) {
    return baseZeroJustificationListService.createItem<SharePointBaseZeroJustificationFields>(
      mapBaseZeroJustificationToSharePoint(contract),
    )
  },

  async updateContract(id: number, contract: Partial<BaseZeroJustificationContract>) {
    const mapped = mapBaseZeroJustificationToSharePoint(contract as BaseZeroJustificationContract)
    return baseZeroJustificationListService.updateItem<SharePointBaseZeroJustificationFields>(id, mapped)
  },
}
