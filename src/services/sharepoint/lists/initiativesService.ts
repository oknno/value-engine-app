import { buildListService } from './baseListService'

export const INITIATIVES_LIST_TITLE = 'Initiatives'
export const initiativesService = buildListService(INITIATIVES_LIST_TITLE, 'SP.Data.InitiativesListItem')
