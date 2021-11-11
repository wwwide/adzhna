import { Theme } from 'theme'
import { IconFace } from './IconFace'

export const getColor = (face: IconFace, theme: Theme, type: 'text' | 'fill') => {
  switch (face) {
    case 'disabled':
      return theme.adzhna.colors.disabled[type]
    case 'primary':
      return theme.adzhna.colors.primary[type].normal
    case 'secondary':
      return theme.adzhna.colors.secondary[type].normal
    case 'danger':
      return theme.adzhna.colors.danger[type].normal
    case 'warning':
      return theme.adzhna.colors.warning[type].normal
    case 'success':
      return theme.adzhna.colors.success[type].normal
  }
}
