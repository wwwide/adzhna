import React, { forwardRef, memo, useCallback, useEffect, useState } from 'react'
import { SearchFieldProps } from './SearchFieldProps'
import { Input } from '../../../Input'

import { ArrowIcon, Box, Loader } from './styles'

export const SearchField = memo(
  forwardRef<HTMLInputElement, SearchFieldProps>((props, ref) => {
    const {
      onDropDownOpen,
      valueOption,
      onTermChange,
      icon,
      dropDownVisible,
      className,
      style,
      searchTerm,
      isLoading,
    } = props
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
      if (typeof searchTerm !== 'undefined') {
        setText(searchTerm)
      } else if (valueOption) {
        setText(initialText)
      }
    }, [valueOption, setText, initialText, searchTerm])

    return (
      <Box>
        <Input
          showClearButton={false}
          onFocus={onDropDownOpen}
          value={searchTerm || text}
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
        {isLoading ? <Loader size={16} /> : <ArrowIcon $open={dropDownVisible} name="arrow-down" face="primary" />}
      </Box>
    )
  }),
)
