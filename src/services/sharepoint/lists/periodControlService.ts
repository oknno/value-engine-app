import { buildListService } from './baseListService'

export const PERIOD_CONTROL_LIST_TITLE = 'PeriodControl'
export const periodControlService = buildListService(PERIOD_CONTROL_LIST_TITLE, 'SP.Data.PeriodControlListItem')
