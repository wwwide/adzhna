import React, { FC, memo } from 'react'
import { PhoneInputProps } from './PhoneInputProps'
import { MaskedInput } from '../MaskedInput'

export const PhoneInput: FC<PhoneInputProps> = memo((props) => {
  const { countryCodeMask, ...rest } = props

  return (
    <MaskedInput
      {...rest}
      mask={['+' as any]
        .concat(countryCodeMask)
        .concat([' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/])}
    />
  )
})
