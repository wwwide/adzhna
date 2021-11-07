import SC from 'styled-components'
import { ButtonStyledProps } from '../ButtonStyledProps'
import { Base } from './base'

export const Secondary = SC(Base)<ButtonStyledProps>`
  background: ${(p) => (p.$outlined ? 'none' : p.theme.adzhna.colors.secondary.fill.normal)};
  color: ${(p) =>
    p.$outlined ? p.theme.adzhna.colors.secondary.fill.normal : p.theme.adzhna.colors.secondary.text.normal};
  border: 1px solid ${(p) => p.theme.adzhna.colors.secondary.fill.normal};
  
  &:hover {
    color: ${(p) =>
      p.$outlined ? p.theme.adzhna.colors.secondary.fill.hover : p.theme.adzhna.colors.secondary.text.hover};
    background: ${(p) => (p.$outlined ? 'none' : p.theme.adzhna.colors.secondary.fill.hover)};
    border-color: ${(p) => p.theme.adzhna.colors.secondary.fill.hover};
  }
  
  &:active {
    color: ${(p) =>
      p.$outlined ? p.theme.adzhna.colors.secondary.fill.active : p.theme.adzhna.colors.secondary.text.active};
    background: ${(p) => (p.$outlined ? 'none' : p.theme.adzhna.colors.secondary.fill.active)};
    border-color: ${(p) => p.theme.adzhna.colors.secondary.fill.active};
  }
`
