import SC from 'styled-components'
import { ButtonStyledProps } from '../ButtonStyledProps'
import { Base } from './base'

export const Success = SC(Base)<ButtonStyledProps>`
  background: ${(p) => (p.$outlined ? 'none' : p.theme.adzhna.colors.success.fill.normal)};
  color: ${(p) =>
    p.$outlined ? p.theme.adzhna.colors.success.fill.normal : p.theme.adzhna.colors.success.text.normal};
  border: 1px solid ${(p) => p.theme.adzhna.colors.success.fill.normal};
  
  &:hover {
    color: ${(p) =>
      p.$outlined ? p.theme.adzhna.colors.success.fill.hover : p.theme.adzhna.colors.success.text.hover};
    background: ${(p) => (p.$outlined ? 'none' : p.theme.adzhna.colors.success.fill.hover)};
    border-color: ${(p) => p.theme.adzhna.colors.success.fill.hover};
  }
  
  &:active {
    color: ${(p) =>
      p.$outlined ? p.theme.adzhna.colors.success.fill.active : p.theme.adzhna.colors.success.text.active};
    background: ${(p) => (p.$outlined ? 'none' : p.theme.adzhna.colors.success.fill.active)};
    border-color: ${(p) => p.theme.adzhna.colors.success.fill.active};
  }
`
