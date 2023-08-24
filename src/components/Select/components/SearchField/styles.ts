import SC, { css } from 'styled-components'
import { Icon } from '../../../Icon'
import { Spinner } from '../../../Spinner'

export const Box = SC.div`${css`
  position: relative;
`}`

export const ArrowIcon = SC(Icon)<{ $open: boolean }>`
  position: absolute;
  right: 10px;
  top: 11px;
  transform: rotate(${(p) => (p.$open ? '180deg' : 0)});
  pointer-events: none;
`

export const Loader = SC(Spinner)`
  position: absolute !important;
  right: 10px !important;
  top: 11px !important;
  left: auto !important;
  pointer-events: none;
`
