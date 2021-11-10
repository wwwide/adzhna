import { ButtonFace } from './ButtonFace'
import { StyledComponent } from 'styled-components'
import { Theme } from 'theme'
import { Danger, Link, Light, Primary, Secondary, Success, Warning } from './faces'
import { ButtonStyledProps } from './ButtonStyledProps'

export const getButtonByFace = (
  face: ButtonFace,
): StyledComponent<'button', Theme, ButtonStyledProps> | undefined => {
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
