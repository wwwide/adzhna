import SC, { css } from 'styled-components'
import { Icon } from '../Icon'

const outerCss = css`
  display: inline-block;
`
export const Outer = SC.span`${outerCss}`

const boxCss = css<{ $hasLabel?: boolean }>`
  outline: ${(p) => p.theme.adzhna.base.outline.width}px ${(p) => p.theme.adzhna.base.outline.style} transparent;
  width: ${(p) => p.theme.adzhna.components.checkBox.width}rem;
  height: ${(p) => p.theme.adzhna.components.checkBox.height}rem;
  border-radius: ${(p) => p.theme.adzhna.components.checkBox.borderRadius || p.theme.adzhna.borders.radius}px;
  border: 1px solid ${(p) => p.theme.adzhna.borders.color};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: ${(p) => (p.$hasLabel ? '.5rem' : '0')};

  &:focus-within {
    outline-color: ${(p) => p.theme.adzhna.base.outline.color};
  }
`
export const Box = SC.span`${boxCss}`

const inputCss = css`
  opacity: 0;
  margin: 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`
export const Input = SC.input`${inputCss}`

const markCss = css<{ $visible: boolean }>`
  pointer-events: none;
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transition: opacity 0.5s;
`
export const Mark = SC(Icon)`${markCss}`

const labelCss = css`
  font-size: ${(p) => p.theme.adzhna.fonts.size}rem;
  font-family: ${(p) => p.theme.adzhna.fonts.family};
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const Label = SC.label`${labelCss}`
