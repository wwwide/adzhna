import SC from 'styled-components'
import { ButtonStyledProps } from '../ButtonStyledProps'

export const Base = SC.button<ButtonStyledProps>`
  cursor: pointer;
  letter-spacing: .5px;
  font-size: ${(p) =>
  p.theme.components.button.fontSize || p.theme.fonts.size}rem;
  line-height: 1;
  padding: ${(p) => p.theme.components.button.padding.y}rem ${(p) =>
  p.theme.components.button.padding.x}rem;
  border: none;
  border-radius: ${p => p.theme.components.button.borderRadius || p.theme.borders.radius}px;
  box-shadow: ${(p) =>
  p.$outlined ? 'none' : p.theme.components.button.shadow};
  transform: scale(1);
  transition: color, background, transform .5s;
  outline: ${(p) => p.theme.base.outline.width}px ${(p) =>
  p.theme.base.outline.style} transparent;
  
  &:focus {
    outline-color: ${(p) => p.theme.base.outline.color};
  }
  
  &:hover {
    transform: scale(1);
    transition: color, background, transform, .5s;
  }
  
  &:active {
    transform: scale(.95);
    transition: color, background, transform, .5s;
  }
`
