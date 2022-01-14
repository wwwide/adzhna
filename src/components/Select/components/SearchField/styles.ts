import SC, { css } from 'styled-components'
import { Icon } from '../../../Icon'

export const Box = SC.div`${css`
  position: relative;
`}`

export const ArrowIcon = SC(Icon)`${css<{ $open: boolean }>`
  position: absolute;
  right: 10px;
  top: 11px;
  transform: rotate(${(p) => (p.$open ? '180deg' : 0)});
  pointer-events: none;
`}`
