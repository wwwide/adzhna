import { CSSProperties, ReactNode } from 'react'

export interface OptionProps {
  label: ReactNode
  value: any
  onSelect: (value: any) => void
  active?: boolean
  highlighted?: boolean
  className?: string
  style?: CSSProperties | undefined
}
