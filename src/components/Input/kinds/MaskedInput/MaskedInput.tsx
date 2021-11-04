import React, { FC, memo, useRef } from 'react'
import { MaskedInputProps } from './MaskedInputProps'
import { SingleLineInput } from '../SingleLineInput'
import { useInputBehavior } from './hooks'
import { isRegExp } from './tools'

export const MaskedInput: FC<MaskedInputProps> = memo((props) => {
  const { mask, onChange: handler, value, placeholder, ...rest } = props
  const inputRef = useRef<HTMLInputElement>()
  const { formattedValue, onKeyDown, onChange, onPaste } = useInputBehavior(value, mask, inputRef, handler)
  const defaultPlaceholder = mask.map(i => isRegExp(i) ? '_' : i).join('')

  return (
    <SingleLineInput
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
