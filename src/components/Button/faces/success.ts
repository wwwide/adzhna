import SC from 'styled-components'
import { ButtonStyledProps } from '../ButtonStyledProps'
import { Base } from './base'

export const Success = SC(Base)<ButtonStyledProps>`
  background: ${(p) =>
    p.$outlined ? 'none' : p.theme.colors.success.fill.normal};
  color: ${(p) =>
    p.$outlined
      ? p.theme.colors.success.fill.normal
      : p.theme.colors.success.text.normal};
  border: 1px solid ${(p) => p.theme.colors.success.fill.normal};
  
  &:hover {
    color: ${(p) =>
      p.$outlined
        ? p.theme.colors.success.fill.hover
        : p.theme.colors.success.text.hover};
    background: ${(p) =>
      p.$outlined ? 'none' : p.theme.colors.success.fill.hover};
    border-color: ${(p) => p.theme.colors.success.fill.hover};
  }
  
  &:active {
    color: ${(p) =>
      p.$outlined
        ? p.theme.colors.success.fill.active
        : p.theme.colors.success.text.active};
    background: ${(p) =>
      p.$outlined ? 'none' : p.theme.colors.success.fill.active};
    border-color: ${(p) => p.theme.colors.success.fill.active};
  }
`
