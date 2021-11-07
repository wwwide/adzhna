import { Theme } from 'theme'
import { CardFace } from './CardFace'

export const getColor = (face: CardFace, theme: Theme, type: 'text' | 'fill') => {
  switch (face) {
    case CardFace.Default:
      if (type === 'text') {
        return theme.adzhna.colors.text
      } else {
        return 'transparent'
      }
    case CardFace.Primary:
      return theme.adzhna.colors.primary[type].normal
    case CardFace.Secondary:
      return theme.adzhna.colors.secondary[type].normal
    case CardFace.Danger:
      return theme.adzhna.colors.danger[type].normal
    case CardFace.Warning:
      return theme.adzhna.colors.warning[type].normal
    case CardFace.Success:
      return theme.adzhna.colors.success[type].normal
  }
}
