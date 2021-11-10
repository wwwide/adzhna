import { ButtonFace } from './ButtonFace'
import { IconFace } from '../Icon'

export const getIconFaceByButtonFace = (face: ButtonFace, disabled?: boolean): IconFace => {
  if (disabled) {
    return IconFace.Disabled
  }
  switch (face) {
    case 'light':
      return IconFace.Disabled
    case 'warning':
      return IconFace.Warning
    case 'success':
      return IconFace.Success
    case 'danger':
      return IconFace.Danger
    case 'primary':
      return IconFace.Primary
    case 'secondary':
      return IconFace.Secondary
    case 'link':
      return IconFace.Secondary
  }
}
