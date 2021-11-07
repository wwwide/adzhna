import SC from 'styled-components'
import { ButtonStyledProps } from '../ButtonStyledProps'
import { Base } from './base'

export const Warning = SC(Base)<ButtonStyledProps>`
  background: ${(p) => (p.$outlined ? 'none' : p.theme.adzhna.colors.warning.fill.normal)};
  color: ${(p) =>
    p.$outlined ? p.theme.adzhna.colors.warning.fill.normal : p.theme.adzhna.colors.warning.text.normal};
  border: 1px solid ${(p) => p.theme.adzhna.colors.warning.fill.normal};
  
  &:hover {
    color: ${(p) =>
      p.$outlined ? p.theme.adzhna.colors.warning.fill.hover : p.theme.adzhna.colors.warning.text.hover};
    background: ${(p) => (p.$outlined ? 'none' : p.theme.adzhna.colors.warning.fill.hover)};
    border-color: ${(p) => p.theme.adzhna.colors.warning.fill.hover};
  }
  
  &:active {
    color: ${(p) =>
      p.$outlined ? p.theme.adzhna.colors.warning.fill.active : p.theme.adzhna.colors.warning.text.active};
    background: ${(p) => (p.$outlined ? 'none' : p.theme.adzhna.colors.warning.fill.active)};
    border-color: ${(p) => p.theme.adzhna.colors.warning.fill.active};
  }
`
