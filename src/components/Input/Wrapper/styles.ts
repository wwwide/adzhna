import SC from 'styled-components'
import { Icon } from '../../Icon'

export const Box = SC.span`
  width: 100%;
  display: inline-block;
  position: relative;
`

export const WrappedIcon = SC(Icon)`
  position: absolute;
  left: ${(p) => p.theme.adzhna.components.input.padding.x}rem;
  top: ${(p) => p.theme.adzhna.components.input.padding.y}rem;
`

export const CopyIcon = SC(Icon)`
  position: absolute;
  right: ${(p) => p.theme.adzhna.components.input.padding.x}rem;
  top: ${(p) => p.theme.adzhna.components.input.padding.y}rem;
  cursor: pointer;
  transform: scale(1);
  transition: transform .5s;
  
  &:hover {
    transform: scale(1.1);
    transition: transform .5s;
  }
  
  &:active {
    transform: scale(.9);
    transition: transform .5s;
  }
`

export const ClearIcon = SC(Icon)<{ $showCopyIcon?: boolean }>`
  position: absolute;
  right: ${(p) =>
    p.$showCopyIcon ? p.theme.adzhna.components.input.padding.x * 2 + 1 : p.theme.adzhna.components.input.padding.x}rem;
  top: ${(p) => p.theme.adzhna.components.input.padding.y}rem;
  cursor: pointer;
  transform: scale(1);
  transition: transform .5s;
  
  &:hover {
    transform: scale(1.1);
    transition: transform .5s;
  }
  
  &:active {
    transform: scale(.9);
    transition: transform .5s;
  }
`
