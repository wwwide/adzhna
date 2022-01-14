import { IconProps } from '../../../Icon'
import { CSSProperties, ReactNode } from 'react'

export interface InnerPickerProps {
  onSwitchDropDown: () => void
  label: ReactNode
  visible: boolean
  disabled?: boolean
  icon?: IconProps
  focused?: boolean
  inputClassName?: string
  inputStyle?: CSSProperties | undefined
  isLoading?: boolean
}
