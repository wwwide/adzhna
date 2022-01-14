import React, { forwardRef, memo, useCallback, useEffect, useState } from 'react'
import { SearchFieldProps } from './SearchFieldProps'
import { Input } from '../../../Input'

import { ArrowIcon, Box } from './styles'

export const SearchField = memo(
  forwardRef<HTMLInputElement, SearchFieldProps>((props, ref) => {
    const { onDropDownOpen, valueOption, onTermChange, icon, dropDownVisible, className, style } = props
    const initialText = typeof valueOption?.label === 'string' ? valueOption?.label : valueOption?.searchLabel
    const [text, setText] = useState(initialText)

    const onChange = useCallback(
      (value: string) => {
        setText(value)
        onTermChange(value)
        onDropDownOpen()
      },
      [onTermChange, setText, onDropDownOpen],
    )

    useEffect(() => {
      if (valueOption) {
        setText(initialText)
      }
    }, [valueOption, setText, initialText])

    return (
      <Box>
        <Input
          showClearButton={false}
          onFocus={onDropDownOpen}
          value={text}
          ref={ref}
          onChange={onChange}
          icon={icon}
          onBlur={(e) => e.stopPropagation()}
          autoComplete="off"
          inputClassName={className}
          inputStyle={{
            paddingRight: '35px',
            ...style,
          }}
        />
        <ArrowIcon $open={dropDownVisible} name="arrow-down" face="primary" />
      </Box>
    )
  }),
)
