import React, { FC, memo } from 'react'
import { PhoneInputProps } from './PhoneInputProps'
import { MaskedInput } from '../MaskedInput'

export const PhoneInput: FC<PhoneInputProps> = memo((props) => {
  const { ...rest } = props

  return <MaskedInput
    {...rest}
    mask={[
      '+',
      '7',
      ' ',
      '(',
      /\d/,
      /\d/,
      /\d/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
    ]}
  />
})
