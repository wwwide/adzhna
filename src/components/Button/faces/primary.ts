import SC from 'styled-components'
import { ButtonStyledProps } from '../ButtonStyledProps'
import { Base } from './base'

export const Primary = SC(Base)<ButtonStyledProps>`
  background: ${(p) => (p.$outlined ? 'none' : p.theme.adzhna.colors.primary.fill.normal)};
  color: ${(p) =>
    p.$outlined ? p.theme.adzhna.colors.primary.fill.normal : p.theme.adzhna.colors.primary.text.normal};
  border: 1px solid ${(p) => p.theme.adzhna.colors.primary.fill.normal};
  
  &:hover {
    color: ${(p) =>
      p.$outlined ? p.theme.adzhna.colors.primary.fill.hover : p.theme.adzhna.colors.primary.text.hover};
    background: ${(p) => (p.$outlined ? 'none' : p.theme.adzhna.colors.primary.fill.hover)};
    border-color: ${(p) => p.theme.adzhna.colors.primary.fill.hover};
  }
  
  &:active {
    color: ${(p) =>
      p.$outlined ? p.theme.adzhna.colors.primary.fill.active : p.theme.adzhna.colors.primary.text.active};
    background: ${(p) => (p.$outlined ? 'none' : p.theme.adzhna.colors.primary.fill.active)};
    border-color: ${(p) => p.theme.adzhna.colors.primary.fill.active};
  }
`
