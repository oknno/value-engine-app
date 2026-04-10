import type { InputHTMLAttributes } from 'react'
import { cn } from '../../lib/utils/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = ({ className, error, id, label, ...props }: InputProps) => (
  <div className="flex flex-col gap-1">
    {label ? (
      <label className="text-sm font-medium text-slate-700" htmlFor={id}>
        {label}
      </label>
    ) : null}
    <input
      className={cn(
        'rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200',
        error && 'border-red-500 focus:border-red-500 focus:ring-red-200',
        className,
      )}
      id={id}
      {...props}
    />
    {error ? <span className="text-xs text-red-600">{error}</span> : null}
  </div>
)
