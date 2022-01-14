import SC, { css } from 'styled-components'
import { Icon } from '../../../Icon'

export const Inner = SC.div`${css<{ $hasIcon?: boolean; $disabled?: boolean; $focused?: boolean }>`
  position: relative;
  cursor: pointer;
  width: 100%;
  outline: ${(p) => p.theme.adzhna.base.outline.width}px ${(p) => p.theme.adzhna.base.outline.style} transparent;
  outline-color: ${(p) => (p.$focused ? p.theme.adzhna.base.outline.color : 'transparent')};
  font-size: ${(p) => p.theme.adzhna.fonts.size}rem;
  font-family: ${(p) => p.theme.adzhna.fonts.family};
  padding-top: ${(p) => p.theme.adzhna.components.select.padding.y}rem;
  padding-bottom: ${(p) => p.theme.adzhna.components.select.padding.y}rem;
  padding-left: ${(p) =>
    p.$hasIcon ? p.theme.adzhna.components.select.padding.x * 2 + 1 : p.theme.adzhna.components.select.padding.x}rem;
  padding-right: ${(p) => p.theme.adzhna.components.select.padding.x * 4}rem;
  border-radius: ${(p) => p.theme.adzhna.components.select.borderRadius || p.theme.adzhna.borders.radius}px;
  border-width: 1px;
  border-color: ${(p) => p.theme.adzhna.borders.color};
  border-style: solid;
`}`

export const ArrowIcon = SC(Icon)`${css<{ $open: boolean }>`
  position: absolute;
  right: 10px;
  top: 11px;
  transform: rotate(${(p) => (p.$open ? '180deg' : 0)});
  pointer-events: none;
`}`

export const CustomIcon = SC(Icon)`${css`
  position: absolute;
  left: 10px;
  top: 11px;
`}`
