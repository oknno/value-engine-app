import { buildListService } from './baseListService'

export const INPUT_MONTHLY_LIST_TITLE = 'InputMonthly'
export const inputMonthlyService = buildListService(INPUT_MONTHLY_LIST_TITLE, 'SP.Data.InputMonthlyListItem')
