import SC, { css } from 'styled-components'
import { Icon } from '../../Icon'

export const Box = SC.div`${css`
  position: relative;
  display: inline-block;
`}`

export const VideoCanvas = SC.video`${css`
  width: 100%;
`}`

export const PhotoCanvas = SC.canvas`${css`
  display: none;
`}`

export const ShotButton = SC.div`${css`
  border-radius: 50%;
  border: 6px solid #fff;
  outline: 1px solid #000;
  width: 64px;
  height: 64px;
  position: absolute;
  z-index: 10000;
  left: calc(50% - 32px);
  bottom: 32px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.4);
  transition: background 1s;

  &:active {
    background: rgba(255, 255, 255, 0.4);
    transition: background 1s;
  }
`}`

export const FlashIcon = SC(Icon)`${css`
  position: absolute;
  z-index: 10000;
  left: 16px;
  top: 16px;
  background: rgba(255, 255, 255, 0.2);
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
`}`
