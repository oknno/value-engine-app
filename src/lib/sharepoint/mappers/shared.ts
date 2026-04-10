import type { SharePointItem } from '../../../domain/types/entities'

export type SharePointMapper<TSharePointFields, TDomainContract> = {
  fromSharePoint: (item: SharePointItem<TSharePointFields>) => TDomainContract
  toSharePoint: (contract: TDomainContract) => TSharePointFields
}

const asString = (value: unknown): string => {
  if (typeof value === 'string') {
    return value
  }

  if (value === null || value === undefined) {
    return ''
  }

  return String(value)
}

const asNumber = (value: unknown): number => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value
  }

  if (typeof value === 'string') {
    const parsed = Number(value)
    if (Number.isFinite(parsed)) {
      return parsed
    }
  }

  return 0
}

const asBoolean = (value: unknown): boolean => Boolean(value)

export const mapperParsers = {
  asBoolean,
  asNumber,
  asString,
}
