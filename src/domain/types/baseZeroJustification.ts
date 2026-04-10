import type { MandatoryScenario } from '../constants/mandatoryScenarios'

export type JustificationCategory = MandatoryScenario

export interface BaseZeroJustification {
  id: string
  category: JustificationCategory
  reason: string
  evidenceLinks?: string[]
  createdAt: string
  createdBy: string
}

export interface JustificationRequirement {
  category: JustificationCategory
  required: boolean
  minLength: number
}
