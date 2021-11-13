import { InputKind } from './InputKind'
import { CommonInput } from './kinds/CommonInput'
import { MaskedInput } from './kinds/MaskedInput'
import { PhoneInput } from './kinds/PhoneInput'

export const getInputByKind = (kind?: InputKind) => {
  switch (kind) {
    case 'masked':
      return MaskedInput
    case 'phone':
      return PhoneInput
    default:
      return CommonInput
  }
}
