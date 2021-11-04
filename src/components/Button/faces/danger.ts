import SC from 'styled-components'
import { ButtonStyledProps } from '../ButtonStyledProps'
import { Base } from './base'

export const Danger = SC(Base)<ButtonStyledProps>`
  background: ${(p) =>
  p.$outlined ? 'none' : p.theme.colors.danger.fill.normal};
  color: ${(p) =>
  p.$outlined ? p.theme.colors.danger.fill.normal : p.theme.colors.danger.text.normal};
  border: 1px solid ${(p) => p.theme.colors.danger.fill.normal};
  
  &:hover {
    color: ${(p) =>
  p.$outlined ? p.theme.colors.danger.fill.hover : p.theme.colors.danger.text.hover};
    background: ${(p) => p.$outlined ? 'none' : p.theme.colors.danger.fill.hover};
    border-color: ${(p) => p.theme.colors.danger.fill.hover};
  }
  
  &:active {
    color: ${(p) => p.$outlined ? p.theme.colors.danger.fill.active : p.theme.colors.danger.text.active};
    background: ${(p) =>
  p.$outlined ? 'none' : p.theme.colors.danger.fill.active};
    border-color: ${(p) => p.theme.colors.danger.fill.active};
  }
`
