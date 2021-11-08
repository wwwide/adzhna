import SC from 'styled-components'
import { ButtonStyledProps } from '../ButtonStyledProps'
import { Base } from './base'

export const Link = SC(Base)<ButtonStyledProps>`
  padding: 0 .5rem;
  background: ${(p) => p.theme.adzhna.colors.link.fill.normal};
  color: ${(p) => p.theme.adzhna.colors.link.text.normal};
  box-shadow: none;
  border-radius: 0;
  
  &:hover {
    background: ${(p) => p.theme.adzhna.colors.link.fill.hover};;
    color: ${(p) => p.theme.adzhna.colors.link.text.hover};
    border-bottom: 1px dashed ${(p) => p.theme.adzhna.colors.link.text.hover};
  }
  
  &:active {
    background: ${(p) => p.theme.adzhna.colors.link.fill.active};;
    color: ${(p) => p.theme.adzhna.colors.link.text.active};
    transform: scale(1);
  }
  
  &:focus {
    border-radius: ${(p) => p.theme.adzhna.borders.radius}px;
  }
  
  &:disabled {
    background: none !important;
    border-bottom: none;
  }
`
