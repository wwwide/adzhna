import { DialogFace } from './DialogFace'
import { IconFace } from '../Icon'

export const getCloseIconFaceByDialogFace = (face: DialogFace): IconFace => {
  switch (face) {
    case DialogFace.Default:
      return IconFace.Disabled
    case DialogFace.Warning:
      return IconFace.Warning
    case DialogFace.Success:
      return IconFace.Success
    case DialogFace.Danger:
      return IconFace.Danger
    case DialogFace.Primary:
      return IconFace.Primary
    case DialogFace.Secondary:
      return IconFace.Secondary
  }
}
