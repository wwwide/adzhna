import SC from 'styled-components'
import { InputStyledProps } from '../InputStyledProps'

export const BaseInput = SC.input<InputStyledProps>`
  outline: ${(p) => p.theme.base.outline.width}px ${(p) =>
  p.theme.base.outline.style} transparent;
  font-size: ${(p) => p.theme.fonts.size}rem;
  padding: ${(p) => p.theme.components.input.padding.y}rem ${(p) =>
  p.theme.components.input.padding.x}rem;
  border-radius: ${(p) =>
  p.theme.components.input.borderRadius || p.theme.borders.radius}px;
  border-width: 1px;
  border-color: ${(p) => p.theme.borders.color};
  border-style: solid;
  ${p => !p.$disabled && `&:focus {
      outline-color: ${p.theme.base.outline.color};
  }`}
  
  &::placeholder {
    color: ${p => p.theme.colors.disabled.text};
  }
`
