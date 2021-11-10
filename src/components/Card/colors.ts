import { Theme } from 'theme'
import { CardFace } from './CardFace'

export const getColor = (face: CardFace, theme: Theme, type: 'text' | 'fill') => {
  switch (face) {
    case 'default':
      if (type === 'text') {
        return theme.adzhna.colors.text
      } else {
        return 'transparent'
      }
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
