import {
  mapComponentFromSharePoint,
  mapComponentToSharePoint,
  type ComponentContract,
  type SharePointComponentFields,
} from '../../../lib/sharepoint/mappers/componentsMapper'
import { buildListService, type ListItemsQuery } from './baseListService'

export const COMPONENTS_LIST_TITLE = 'Components'

const baseComponentsService = buildListService(COMPONENTS_LIST_TITLE, 'SP.Data.ComponentsListItem')

export const componentsService = {
  ...baseComponentsService,

  async getContracts(query: ListItemsQuery): Promise<ComponentContract[]> {
    const items = await baseComponentsService.getItems<SharePointComponentFields>(query)
    return items.map(mapComponentFromSharePoint)
  },

  async createContract(contract: ComponentContract) {
    return baseComponentsService.createItem<SharePointComponentFields>(mapComponentToSharePoint(contract))
  },

  async updateContract(id: number, contract: Partial<ComponentContract>) {
    const mapped = mapComponentToSharePoint(contract as ComponentContract)
    return baseComponentsService.updateItem<SharePointComponentFields>(id, mapped)
  },
}
