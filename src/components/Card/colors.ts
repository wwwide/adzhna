import { Theme } from 'theme'
import { CardFace } from './CardFace'

export const getColor = (
  face: CardFace,
  theme: Theme,
  type: 'text' | 'fill',
) => {
  switch (face) {
    case CardFace.Default:
      if (type === 'text') {
        return theme.colors.text
      } else {
        return 'transparent'
      }
    case CardFace.Primary:
      return theme.colors.primary[type].normal
    case CardFace.Secondary:
      return theme.colors.secondary[type].normal
    case CardFace.Danger:
      return theme.colors.danger[type].normal
    case CardFace.Warning:
      return theme.colors.warning[type].normal
    case CardFace.Success:
      return theme.colors.success[type].normal
  }
}
