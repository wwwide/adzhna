import { InputHTMLAttributes } from 'react'
import { InputKind } from './InputKind'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  kind?: InputKind
  onChange?: (value: string | number, error?: string) => void
  validator?: (value: string | number) => string | undefined
}
