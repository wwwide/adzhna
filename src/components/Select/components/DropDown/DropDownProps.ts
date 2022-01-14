import { CSSProperties, ReactElement, ReactNode } from 'react'

export interface DropDownProps {
  visible: boolean
  dataSource: { label: string | ReactNode; value: any }[]
  left: number
  top: number
  width: number
  onSelect: (value: any) => void
  value: any
  highlightedValue: any
  maxHeight?: number
  className?: string
  style?: CSSProperties | undefined
  optionClassName?: string
  optionStyle?: CSSProperties | undefined
  optionRenderer?: (
    label: ReactNode,
    value: any,
    onSelect: (value: any) => void,
    active?: boolean,
    highlighted?: boolean,
    className?: string,
    style?: CSSProperties | undefined,
  ) => ReactElement
}
