import SC from 'styled-components'
import { ButtonStyledProps } from '../ButtonStyledProps'
import { Base } from './base'

export const Warning = SC(Base)<ButtonStyledProps>`
  background: ${(p) =>
    p.$outlined ? 'none' : p.theme.colors.warning.fill.normal};
  color: ${(p) =>
    p.$outlined
      ? p.theme.colors.warning.fill.normal
      : p.theme.colors.warning.text.normal};
  border: 1px solid ${(p) => p.theme.colors.warning.fill.normal};
  
  &:hover {
    color: ${(p) =>
      p.$outlined
        ? p.theme.colors.warning.fill.hover
        : p.theme.colors.warning.text.hover};
    background: ${(p) =>
      p.$outlined ? 'none' : p.theme.colors.warning.fill.hover};
    border-color: ${(p) => p.theme.colors.warning.fill.hover};
  }
  
  &:active {
    color: ${(p) =>
      p.$outlined
        ? p.theme.colors.warning.fill.active
        : p.theme.colors.warning.text.active};
    background: ${(p) =>
      p.$outlined ? 'none' : p.theme.colors.warning.fill.active};
    border-color: ${(p) => p.theme.colors.warning.fill.active};
  }
`
