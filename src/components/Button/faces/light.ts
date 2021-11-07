import SC from 'styled-components'
import { ButtonStyledProps } from '../ButtonStyledProps'
import { Base } from './base'

export const Light = SC(Base)<ButtonStyledProps>`
  background: ${(p) => (p.$outlined ? 'none' : p.theme.adzhna.colors.light.fill.normal)};
  color: ${(p) => (p.$outlined ? p.theme.adzhna.colors.light.fill.normal : p.theme.adzhna.colors.light.text.normal)};
  border: 1px solid ${(p) => p.theme.adzhna.colors.light.fill.normal};
  
  &:hover {
    color: ${(p) => (p.$outlined ? p.theme.adzhna.colors.light.fill.hover : p.theme.adzhna.colors.light.text.hover)};
    background: ${(p) => (p.$outlined ? 'none' : p.theme.adzhna.colors.light.fill.hover)};
    border-color: ${(p) => p.theme.adzhna.colors.light.fill.hover};
  }
  
  &:active {
    color: ${(p) => (p.$outlined ? p.theme.adzhna.colors.light.fill.active : p.theme.adzhna.colors.light.text.active)};
    background: ${(p) => (p.$outlined ? 'none' : p.theme.adzhna.colors.light.fill.active)};
    border-color: ${(p) => p.theme.adzhna.colors.light.fill.active};
  }
`
