import SC, { css } from 'styled-components'
import { InputStyledProps } from './InputStyledProps'

const style = css<InputStyledProps>`
  width: 100%;
  outline: none;
  font-size: ${(p) => p.theme.adzhna.fonts.size}rem;
  font-family: ${(p) => p.theme.adzhna.fonts.family};
  padding-top: ${(p) => p.theme.adzhna.components.input.padding.y}rem;
  padding-bottom: ${(p) => p.theme.adzhna.components.input.padding.y}rem;
  padding-left: ${(p) =>
    p.$hasIcon ? p.theme.adzhna.components.input.padding.x * 2 + 1 : p.theme.adzhna.components.input.padding.x}rem;
  padding-right: ${(p) => {
    const copy = +(p.$hasCopyIcon || 0)
    const clear = +(p.$hasClearIcon || 0)
    return copy + clear + p.theme.adzhna.components.input.padding.x * (copy + clear + 1)
  }}rem;
  border-radius: ${(p) => p.theme.adzhna.components.input.borderRadius || p.theme.adzhna.borders.radius}px;
  border-width: 1px;
  border-color: ${(p) => p.theme.adzhna.borders.color};
  border-style: solid;
  ${(p) =>
    !p.$disabled &&
    `&:focus {
      box-shadow: 0 0 ${p.theme.adzhna.base.outline.width}px ${p.theme.adzhna.base.outline.width}px ${p.theme.adzhna.base.outline.color};
  }`}

  &::placeholder {
    color: ${(p) => p.theme.adzhna.colors.disabled.text};
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
