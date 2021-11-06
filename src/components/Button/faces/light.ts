import SC from 'styled-components'
import { ButtonStyledProps } from '../ButtonStyledProps'
import { Base } from './base'

export const Light = SC(Base)<ButtonStyledProps>`
  background: ${(p) =>
    p.$outlined ? 'none' : p.theme.colors.light.fill.normal};
  color: ${(p) =>
    p.$outlined
      ? p.theme.colors.light.fill.normal
      : p.theme.colors.light.text.normal};
  border: 1px solid ${(p) => p.theme.colors.light.fill.normal};
  
  &:hover {
    color: ${(p) =>
      p.$outlined
        ? p.theme.colors.light.fill.hover
        : p.theme.colors.light.text.hover};
    background: ${(p) =>
      p.$outlined ? 'none' : p.theme.colors.light.fill.hover};
    border-color: ${(p) => p.theme.colors.light.fill.hover};
  }
  
  &:active {
    color: ${(p) =>
      p.$outlined
        ? p.theme.colors.light.fill.active
        : p.theme.colors.light.text.active};
    background: ${(p) =>
      p.$outlined ? 'none' : p.theme.colors.light.fill.active};
    border-color: ${(p) => p.theme.colors.light.fill.active};
  }
`
