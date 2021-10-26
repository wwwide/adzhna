import SC from 'styled-components'
import { ButtonStyledProps } from '../ButtonStyledProps'
import { Base } from './base'

export const Secondary = SC(Base)<ButtonStyledProps>`
  background: ${(p) =>
    p.$outlined ? 'none' : p.theme.colors.secondary.fill.normal};
  color: ${(p) =>
    p.$outlined
      ? p.theme.colors.secondary.fill.normal
      : p.theme.colors.secondary.text.normal};
  border: 2px solid ${(p) => p.theme.colors.secondary.fill.normal};
  
  &:hover {
    color: ${(p) =>
      p.$outlined
        ? p.theme.colors.secondary.fill.hover
        : p.theme.colors.secondary.text.hover};
    background: ${(p) =>
      p.$outlined ? 'none' : p.theme.colors.secondary.fill.hover};
    border-color: ${(p) => p.theme.colors.secondary.fill.hover};
  }
  
  &:active {
    color: ${(p) =>
      p.$outlined
        ? p.theme.colors.secondary.fill.active
        : p.theme.colors.secondary.text.active};
    background: ${(p) =>
      p.$outlined ? 'none' : p.theme.colors.secondary.fill.active};
    border-color: ${(p) => p.theme.colors.secondary.fill.active};
  }
`
