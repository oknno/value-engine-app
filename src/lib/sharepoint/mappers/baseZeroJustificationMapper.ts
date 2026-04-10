import type { SharePointItem } from '../../../domain/types/entities'
import type { JustificationCategory } from '../../../domain/types/baseZeroJustification'
import { mapperParsers } from './shared'

export interface SharePointBaseZeroJustificationFields {
  Category: JustificationCategory
  Reason: string
  EvidenceLinks: string
  CreatedAt: string
  CreatedBy: string
}

export interface BaseZeroJustificationContract {
  id: string
  category: JustificationCategory
  reason: string
  evidenceLinks: string[]
  createdAt: string
  createdBy: string
}

export const mapBaseZeroJustificationFromSharePoint = (
  item: SharePointItem<SharePointBaseZeroJustificationFields>,
): BaseZeroJustificationContract => ({
  id: String(item.id),
  category: item.fields.Category,
  reason: mapperParsers.asString(item.fields.Reason),
  evidenceLinks: mapperParsers
    .asString(item.fields.EvidenceLinks)
    .split(';')
    .map((link) => link.trim())
    .filter(Boolean),
  createdAt: mapperParsers.asString(item.fields.CreatedAt),
  createdBy: mapperParsers.asString(item.fields.CreatedBy),
})

export const mapBaseZeroJustificationToSharePoint = (
  contract: BaseZeroJustificationContract,
): SharePointBaseZeroJustificationFields => ({
  Category: contract.category,
  Reason: contract.reason,
  EvidenceLinks: contract.evidenceLinks.join(';'),
  CreatedAt: contract.createdAt,
  CreatedBy: contract.createdBy,
})
