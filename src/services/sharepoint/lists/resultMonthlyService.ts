import { buildListService } from './baseListService'

export const RESULT_MONTHLY_LIST_TITLE = 'ResultMonthly'
export const resultMonthlyService = buildListService(RESULT_MONTHLY_LIST_TITLE, 'SP.Data.ResultMonthlyListItem')
