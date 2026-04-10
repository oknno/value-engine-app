import {
  mapInitiativeFromSharePoint,
  mapInitiativeToSharePoint,
  type InitiativeContract,
  type SharePointInitiativeFields,
} from '../../../lib/sharepoint/mappers/initiativesMapper'
import { buildListService, type ListItemsQuery } from './baseListService'

export const INITIATIVES_LIST_TITLE = 'Initiatives'

const baseInitiativesService = buildListService(INITIATIVES_LIST_TITLE, 'SP.Data.InitiativesListItem')

export const initiativesService = {
  ...baseInitiativesService,

  async getContracts(query: ListItemsQuery): Promise<InitiativeContract[]> {
    const items = await baseInitiativesService.getItems<SharePointInitiativeFields>(query)
    return items.map(mapInitiativeFromSharePoint)
  },

  async createContract(contract: InitiativeContract) {
    return baseInitiativesService.createItem<SharePointInitiativeFields>(mapInitiativeToSharePoint(contract))
  },

  async updateContract(id: number, contract: Partial<InitiativeContract>) {
    const mapped = mapInitiativeToSharePoint(contract as InitiativeContract)
    return baseInitiativesService.updateItem<SharePointInitiativeFields>(id, mapped)
  },
}
