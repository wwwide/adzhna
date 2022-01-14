import { CSSProperties, ReactElement, ReactNode, SelectHTMLAttributes } from 'react'
import { IconProps } from '../Icon'

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'> {
  value?: any
  onChange: (value: any, error?: string) => void
  validator?: (value: any) => string | undefined
  dataSource: { label: ReactNode; value: any; searchLabel?: string }[]
  inputClassName?: string
  inputStyle?: CSSProperties | undefined
  dropDownClassName?: string
  dropDownStyle?: CSSProperties | undefined
  optionClassName?: string
  optionStyle?: CSSProperties | undefined
  icon?: IconProps
  containerSelectors?: string[]
  maxDropDownHeight?: number
  optionRenderer?: (
    label: ReactNode,
    value: any,
    onSelect: (value: any) => void,
    active?: boolean,
    highlighted?: boolean,
    className?: string,
    style?: CSSProperties | undefined,
  ) => ReactElement
  onSearch?: (term: string) => void
}
