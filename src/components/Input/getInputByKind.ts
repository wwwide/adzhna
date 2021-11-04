import { InputKind } from "./InputKind";
import { SingleLineInput } from './kinds/SingleLineInput'
import { MaskedInput } from './kinds/MaskedInput'
import { PhoneInput } from './kinds/PhoneInput'

export const getInputByKind = (kind?: InputKind) => {
  switch (kind) {
    case InputKind.Masked: return MaskedInput
    case InputKind.Phone: return PhoneInput
    default: return SingleLineInput
  }
}
