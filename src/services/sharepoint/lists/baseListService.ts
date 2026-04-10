import type { SharePointListResponse } from '../../../domain/types/entities'
import type { SpQueryParams } from '../spQueryBuilder'
import { spClient } from '../spClient'

interface SharePointMetadata {
  __metadata: {
    type: string
  }
}

export interface ListItemsQuery extends SpQueryParams {}

const toListItemsPath = (listTitle: string): string =>
  `/_api/web/lists/getbytitle('${encodeURIComponent(listTitle)}')/items`

const withItemType = <TFields extends Record<string, unknown>>(
  fields: TFields,
  entityTypeFullName: string,
): TFields & SharePointMetadata => ({
  __metadata: { type: entityTypeFullName },
  ...fields,
})

export const buildListService = (listTitle: string, entityTypeFullName: string) => ({
  async getItems<TFields = Record<string, unknown>>(query: ListItemsQuery) {
    const response = await spClient.get<SharePointListResponse<TFields>>(toListItemsPath(listTitle), query)
    return response.value
  },

  async createItem<TFields extends Record<string, unknown>>(fields: TFields) {
    return spClient.request(toListItemsPath(listTitle), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;odata=verbose',
      },
      body: JSON.stringify(withItemType(fields, entityTypeFullName)),
    })
  },

  async updateItem<TFields extends Record<string, unknown>>(id: number, fields: Partial<TFields>) {
    return spClient.request(`${toListItemsPath(listTitle)}(${id})`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;odata=verbose',
      },
      body: JSON.stringify(withItemType(fields, entityTypeFullName)),
    })
  },

  async deleteItem(id: number) {
    return spClient.request(`${toListItemsPath(listTitle)}(${id})`, {
      method: 'DELETE',
    })
  },
})
