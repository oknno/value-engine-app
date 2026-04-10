export interface SpQueryParams {
  select: string[]
  expand?: string[]
  filter?: string
  top?: number
  orderBy?: string
  skip?: number
}

const toCsv = (values: string[]): string => values.map((value) => value.trim()).filter(Boolean).join(',')

export const buildSpQueryString = ({
  select,
  expand,
  filter,
  top,
  orderBy,
  skip,
}: SpQueryParams): string => {
  if (select.length === 0) {
    throw new Error('SharePoint queries must declare at least one $select field.')
  }

  const query = new URLSearchParams()
  query.set('$select', toCsv(select))

  if (expand && expand.length > 0) {
    query.set('$expand', toCsv(expand))
  }

  if (filter) {
    query.set('$filter', filter)
  }

  if (typeof top === 'number') {
    query.set('$top', String(top))
  }

  if (orderBy) {
    query.set('$orderby', orderBy)
  }

  if (typeof skip === 'number') {
    query.set('$skip', String(skip))
  }

  return query.toString()
}
