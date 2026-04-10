import { buildListService } from './baseListService'

export const COMPONENTS_LIST_TITLE = 'Components'
export const componentsService = buildListService(COMPONENTS_LIST_TITLE, 'SP.Data.ComponentsListItem')
