import { spHttpClient } from '../../lib/http/spHttpClient'
import type { SharePointListResponse } from '../../types/api'

const toListItemsPath = (listTitle: string): string =>
  `/_api/web/lists/getbytitle('${encodeURIComponent(listTitle)}')/items`

export const listService = {
  async getItems<TFields = Record<string, unknown>>(listTitle: string) {
    const response = await spHttpClient.get<SharePointListResponse<TFields>>(toListItemsPath(listTitle))
    return response.value
  },
}
