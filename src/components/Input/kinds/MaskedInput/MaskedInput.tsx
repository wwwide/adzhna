import React, { FC, memo, useRef } from 'react'
import { MaskedInputProps } from './MaskedInputProps'
import { CommonInput } from '../CommonInput'
import { useInputBehavior } from './hooks'
import { isRegExp } from './tools'

export const MaskedInput: FC<MaskedInputProps> = memo((props) => {
  const { mask, onChange: handler, value, placeholder, ...rest } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const { formattedValue, onKeyDown, onChange, onPaste } = useInputBehavior(value, mask || [], inputRef, handler)
  const defaultPlaceholder = (mask || []).map((i) => (isRegExp(i) ? '_' : i)).join('')

  return (
    <CommonInput
      {...rest}
      placeholder={placeholder || defaultPlaceholder}
      ref={inputRef}
      value={formattedValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onPaste={onPaste}
    />
  )
})
