import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react'
import { IconProps } from '../Icon'

export interface CheckBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value: boolean | null | undefined
  onChange?: (value: boolean, error?: string) => void
  boxClassName?: string
  boxStyle?: CSSProperties | undefined
  labelClassName?: string
  labelStyle?: CSSProperties | undefined
  label?: ReactNode
  boxIcon?: IconProps
}
