import SC from 'styled-components'
import { ButtonStyledProps } from '../ButtonStyledProps'
import { Base } from './base'

export const Primary = SC(Base)<ButtonStyledProps>`
  background: ${(p) =>
    p.$outlined ? 'none' : p.theme.colors.primary.fill.normal};
  color: ${(p) =>
    p.$outlined
      ? p.theme.colors.primary.fill.normal
      : p.theme.colors.primary.text.normal};
  border: 2px solid ${(p) => p.theme.colors.primary.fill.normal};
  
  &:hover {
    color: ${(p) =>
      p.$outlined
        ? p.theme.colors.primary.fill.hover
        : p.theme.colors.primary.text.hover};
    background: ${(p) =>
      p.$outlined ? 'none' : p.theme.colors.primary.fill.hover};
    border-color: ${(p) => p.theme.colors.primary.fill.hover};
  }
  
  &:active {
    color: ${(p) =>
      p.$outlined
        ? p.theme.colors.primary.fill.active
        : p.theme.colors.primary.text.active};
    background: ${(p) =>
      p.$outlined ? 'none' : p.theme.colors.primary.fill.active};
    border-color: ${(p) => p.theme.colors.primary.fill.active};
  }
`
