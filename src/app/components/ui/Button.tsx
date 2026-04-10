import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { cn } from '../../lib/utils/cn'

type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

const baseClassName = 'rounded-md border px-4 py-2 text-sm font-medium transition'

const variantClassName: Record<ButtonVariant, string> = {
  primary: 'border-blue-600 bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100',
}

export const Button = ({ children, className, variant = 'primary', ...props }: PropsWithChildren<ButtonProps>) => (
  <button className={cn(baseClassName, variantClassName[variant], className)} type="button" {...props}>
    {children}
  </button>
)
