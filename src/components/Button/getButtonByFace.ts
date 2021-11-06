import { ButtonFace } from './ButtonFace'
import { StyledComponent } from 'styled-components'
import { Theme } from 'theme'
import { Danger, Link, Light, Primary, Secondary, Success, Warning } from './faces'
import { ButtonStyledProps } from './ButtonStyledProps'

export const getButtonByFace = (
  face: ButtonFace,
): StyledComponent<'button', Theme, ButtonStyledProps> | undefined => {
  if (face === ButtonFace.Primary) {
    return Primary
  }
  if (face === ButtonFace.Secondary) {
    return Secondary
  }
  if (face === ButtonFace.Danger) {
    return Danger
  }
  if (face === ButtonFace.Warning) {
    return Warning
  }
  if (face === ButtonFace.Success) {
    return Success
  }
  if (face === ButtonFace.Link) {
    return Link
  }
  if (face === ButtonFace.Light) {
    return Light
  }
  return undefined
}
