import { Theme } from 'theme'
import { IconFace } from './IconFace'

export const getColor = (
  face: IconFace,
  theme: Theme,
  type: 'text' | 'fill',
) => {
  switch (face) {
    case IconFace.Disabled:
      return theme.colors.disabled[type]
    case IconFace.Primary:
      return theme.colors.primary[type].normal
    case IconFace.Secondary:
      return theme.colors.secondary[type].normal
    case IconFace.Danger:
      return theme.colors.danger[type].normal
    case IconFace.Warning:
      return theme.colors.warning[type].normal
    case IconFace.Success:
      return theme.colors.success[type].normal
  }
}
