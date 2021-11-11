import { ButtonFace } from './ButtonFace'
import { IconFace } from '../Icon'

export const getIconFaceByButtonFace = (face: ButtonFace, disabled?: boolean): IconFace => {
  if (disabled) {
    return 'disabled'
  }
  switch (face) {
    case 'light':
      return 'disabled'
    case 'warning':
      return 'warning'
    case 'success':
      return 'success'
    case 'danger':
      return 'danger'
    case 'primary':
      return 'primary'
    case 'secondary':
      return 'secondary'
    case 'link':
      return 'secondary'
  }
}
