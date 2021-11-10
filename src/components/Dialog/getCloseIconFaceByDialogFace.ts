import { DialogFace } from './DialogFace'
import { IconFace } from '../Icon'

export const getCloseIconFaceByDialogFace = (face: DialogFace): IconFace => {
  switch (face) {
    case 'default':
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
  }
}
