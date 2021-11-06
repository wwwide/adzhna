import { ButtonFace } from './ButtonFace'
import { IconFace } from '../Icon'

export const getIconFaceByButtonFace = (face: ButtonFace, disabled?: boolean): IconFace => {
  if (disabled) {
    return IconFace.Disabled
  }
  switch (face) {
    case ButtonFace.Light:
      return IconFace.Disabled
    case ButtonFace.Warning:
      return IconFace.Warning
    case ButtonFace.Success:
      return IconFace.Success
    case ButtonFace.Danger:
      return IconFace.Danger
    case ButtonFace.Primary:
      return IconFace.Primary
    case ButtonFace.Secondary:
      return IconFace.Secondary
    case ButtonFace.Link:
      return IconFace.Secondary
  }
}
