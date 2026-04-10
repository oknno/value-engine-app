import { spClient } from '../../../services/sharepoint/spClient'
import type { SharePointListResponse } from '../../../domain/types/entities'

interface ListItemsQuery {
  select: string[]
  expand?: string[]
}

const toListItemsPath = (listTitle: string): string =>
  `/_api/web/lists/getbytitle('${encodeURIComponent(listTitle)}')/items`

export const listService = {
  async getItems<TFields = Record<string, unknown>>(listTitle: string, query: ListItemsQuery) {
    const response = await spClient.get<SharePointListResponse<TFields>>(toListItemsPath(listTitle), query)
    return response.value
  },
}
