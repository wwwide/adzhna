import { DialogFace } from './DialogFace'
import { IconFace } from '../Icon'

export const getCloseIconFaceByDialogFace = (face: DialogFace): IconFace => {
  switch (face) {
    case 'default':
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
  }
}
