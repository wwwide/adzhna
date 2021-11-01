import SC from 'styled-components'
import { IconFace } from './IconFace'
import { getColor } from './colors'

export const Box = SC.i`
  display: inline-block;
`

export const Content = SC.span<{
  $size: string
  $face: IconFace
  $color?: string
  $fill?: string
}>`
  display: flex;
  align-items: center;
  width: ${(p) => p.$size};
  height: ${(p) => p.$size};
  
  > svg {
    width: 100%;
    height: 100%;
    fill: ${(p) => p.$fill || getColor(p.$face, p.theme, 'fill')};
    color: ${(p) => p.$color || getColor(p.$face, p.theme, 'text')};
  }
`
