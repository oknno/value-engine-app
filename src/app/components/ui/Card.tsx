import type { HTMLAttributes, PropsWithChildren } from 'react'
import { cn } from '../../lib/utils/cn'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string
}

export const Card = ({ children, className, title, ...props }: PropsWithChildren<CardProps>) => (
  <section className={cn('rounded-lg border border-slate-200 bg-white p-4 shadow-sm', className)} {...props}>
    {title ? <h2 className="mb-3 text-base font-semibold text-slate-800">{title}</h2> : null}
    {children}
  </section>
)
