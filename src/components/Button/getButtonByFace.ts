import { ButtonFace } from './ButtonFace'
import { IStyledComponent } from 'styled-components'
import {
  Danger,
  Link,
  Light,
  Primary,
  Secondary,
  Success,
  Warning,
} from './faces'
import { ButtonStyledProps } from './ButtonStyledProps'
import { PropsWithChildren } from 'react'

export const getButtonByFace = (
  face: ButtonFace,
):
  | IStyledComponent<'web', PropsWithChildren<ButtonStyledProps>>
  | undefined => {
  if (face === 'primary') {
    return Primary
  }
  if (face === 'secondary') {
    return Secondary
  }
  if (face === 'danger') {
    return Danger
  }
  if (face === 'warning') {
    return Warning
  }
  if (face === 'success') {
    return Success
  }
  if (face === 'link') {
    return Link
  }
  if (face === 'light') {
    return Light
  }
  return undefined
}
