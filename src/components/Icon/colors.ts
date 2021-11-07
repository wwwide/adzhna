import { Theme } from 'theme'
import { IconFace } from './IconFace'

export const getColor = (face: IconFace, theme: Theme, type: 'text' | 'fill') => {
  switch (face) {
    case IconFace.Disabled:
      return theme.adzhna.colors.disabled[type]
    case IconFace.Primary:
      return theme.adzhna.colors.primary[type].normal
    case IconFace.Secondary:
      return theme.adzhna.colors.secondary[type].normal
    case IconFace.Danger:
      return theme.adzhna.colors.danger[type].normal
    case IconFace.Warning:
      return theme.adzhna.colors.warning[type].normal
    case IconFace.Success:
      return theme.adzhna.colors.success[type].normal
  }
}
