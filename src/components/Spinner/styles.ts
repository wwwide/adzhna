import SC, { css, keyframes } from 'styled-components'
import { SpinnerProps } from './SpinnerProps'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const DEFAULT_SIZE = 32

export const Spinner = SC.div`${css<SpinnerProps>`
  position: ${(p) => (p.centered ? 'absolute' : 'relative')};
  left: ${(p) => (p.centered ? '50%' : '0')};
  top: ${(p) => (p.centered ? '50%' : '0')};
  margin-left: ${(p) => (p.centered ? `-${(p.size || DEFAULT_SIZE) / 2}px` : '')};
  margin-top: ${(p) => (p.centered ? `-${(p.size || DEFAULT_SIZE) / 2}px` : '')};
  width: ${(p) => p.size || DEFAULT_SIZE}px;
  height: ${(p) => p.size || DEFAULT_SIZE}px;
  border-color: ${(p) => p.color || p.theme.adzhna.colors.primary.fill.normal} transparent
    ${(p) => p.color || p.theme.adzhna.colors.primary.fill.normal} transparent;
  border-style: solid;
  border-radius: 50%;
  border-width: ${(p) => (p.size || 32) / 10}px;
  animation: ${rotate} ${(p) => p.durationInSeconds || 2}s infinite linear;
  z-index: 10001;
  flex-shrink: 0;
`}`

export const Overlay = SC.div<{ $position: 'absolute' | 'relative' }>`
  position: ${(p) => p.$position};
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(2px);
  z-index: 10000;
`

export const Box = SC.div`${css`
  position: relative;
`}`
