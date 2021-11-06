import SC, { css } from 'styled-components'
import { InputStyledProps } from './InputStyledProps'

const style = css<InputStyledProps>`
  width: 100%;
  outline: ${(p) => p.theme.base.outline.width}px ${(p) => p.theme.base.outline.style} transparent;
  font-size: ${(p) => p.theme.fonts.size}rem;
  font-family: ${(p) => p.theme.fonts.family};
  padding-top: ${(p) => p.theme.components.input.padding.y}rem;
  padding-bottom: ${(p) => p.theme.components.input.padding.y}rem;
  padding-left: ${(p) =>
    p.$hasIcon ? p.theme.components.input.padding.x * 2 + 1 : p.theme.components.input.padding.x}rem;
  padding-right: ${(p) => {
    const copy = +(p.$hasCopyIcon || 0)
    const clear = +(p.$hasClearIcon || 0)
    return copy + clear + p.theme.components.input.padding.x * (copy + clear + 1)
  }}rem;
  border-radius: ${(p) => p.theme.components.input.borderRadius || p.theme.borders.radius}px;
  border-width: 1px;
  border-color: ${(p) => p.theme.borders.color};
  border-style: solid;
  ${(p) =>
    !p.$disabled &&
    `&:focus {
      outline-color: ${p.theme.base.outline.color};
  }`}

  &::placeholder {
    color: ${(p) => p.theme.colors.disabled.text};
  }
`

export const BaseInput = SC.input<InputStyledProps>`
  ${style}
`

export const BaseTextArea = SC.textarea<InputStyledProps>`
  ${style}
  resize: none;
  height: 100%;
`
