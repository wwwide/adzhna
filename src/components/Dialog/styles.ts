import SC from 'styled-components'
import { Card } from '../Card'
import { Icon } from '../Icon'

export const Overlay = SC.div<{ $open: boolean }>`
  font-size: ${(p) => p.theme.adzhna.fonts.size}rem;
  font-family: ${(p) => p.theme.adzhna.fonts.family};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: ${(p) => p.theme.adzhna.components.dialog.overlay};
  opacity: ${(p) => (p.$open ? 1 : 0)};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  pointer-events: ${(p) => (p.$open ? 'all' : 'none')};
  z-index: 9998;
  transition: opacity .5s;
`

export const Window = SC(Card)`
  margin: 5% auto 0 auto;
  max-height: calc(100vh - 5%);
  max-width: 90%;
  display: flex;
  flex-direction: column;
`

export const Actions = SC.div`
  display: flex;
  align-items: center;
`

export const CloseIcon = SC(Icon)`
  margin-left: 2rem;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.1);
    transition: transform .5s;
  }
  
  &:active {
    transform: scale(.9);
    transition: transform .5s;
  }
`
