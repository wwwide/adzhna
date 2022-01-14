import SC, { css } from 'styled-components'
import { Icon } from '../../../Icon'
import { Spinner } from '../../../Spinner'

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

export const Loader = SC(Spinner)`${css`
  position: absolute;
  right: 10px;
  top: 10px;
  left: unset;
  pointer-events: none;
`}`
