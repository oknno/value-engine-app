import { buildListService } from './baseListService'

export const STATUS_HISTORY_LIST_TITLE = 'StatusHistory'
export const statusHistoryService = buildListService(STATUS_HISTORY_LIST_TITLE, 'SP.Data.StatusHistoryListItem')
