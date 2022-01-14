import React, { forwardRef, memo } from 'react'
import { InnerPickerProps } from './InnerPickerProps'

import { ArrowIcon, CustomIcon, Inner, Loader } from './styles'

export const InnerPicker = memo(
  forwardRef<HTMLDivElement, InnerPickerProps>((props, ref) => {
    const { inputStyle, inputClassName, icon, disabled, focused, onSwitchDropDown, label, visible, isLoading } = props

    return (
      <Inner
        $disabled={disabled}
        $hasIcon={!!icon}
        $focused={focused}
        className={inputClassName}
        style={inputStyle}
        ref={ref}
        onClick={onSwitchDropDown}
      >
        {!!icon && <CustomIcon {...icon} />}
        {label}
        {isLoading ? <Loader size={16} /> : <ArrowIcon $open={visible} name="arrow-down" face="primary" />}
      </Inner>
    )
  }),
)
