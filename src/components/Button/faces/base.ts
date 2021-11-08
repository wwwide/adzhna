import SC from 'styled-components'
import { ButtonStyledProps } from '../ButtonStyledProps'

export const Base = SC.button<ButtonStyledProps>`
  cursor: pointer;
  letter-spacing: .5px;
  font-size: ${(p) => p.theme.adzhna.fonts.size}rem;
  font-family: ${(p) => p.theme.adzhna.fonts.family};
  padding: ${(p) => p.theme.adzhna.components.button.padding.y}rem ${(p) =>
  p.theme.adzhna.components.button.padding.x}rem;
  border: none;
  border-radius: ${(p) => p.theme.adzhna.components.button.borderRadius || p.theme.adzhna.borders.radius}px;
  box-shadow: ${(p) => (p.$outlined || p.$disabled ? 'none' : p.theme.adzhna.components.button.shadow)};
  transform: scale(1);
  transition: color, background, transform .5s;
  outline: ${(p) => p.theme.adzhna.base.outline.width}px ${(p) => p.theme.adzhna.base.outline.style} transparent;
  ${(p) => (p.$disabled && !p.$outlined ? `background-color: ${p.theme.adzhna.colors.disabled.fill} !important;` : '')}
  ${(p) => (p.$disabled ? `color: ${p.theme.adzhna.colors.disabled.text} !important;` : '')}
  ${(p) => (p.$disabled ? `border-color: ${p.theme.adzhna.colors.disabled.fill} !important;` : '')}
  ${(p) =>
    !p.$disabled &&
    `
    &:focus {
      outline-color: ${p.theme.adzhna.base.outline.color};
    }
    
    &:hover {
      transform: scale(1);
      transition: color, background, transform, .5s;
    }
    
    &:active {
      outline-color: transparent;
      transform: scale(.99);
      transition: color, background, transform, .5s;
    }
  `}
`
