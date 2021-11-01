import { IconName } from './IconName'
import { IconSize } from './IconSize'
import { IconFace } from './IconFace'
import { IconPosition } from './IconPosition'

export interface IconProps {
  name: IconName
  face?: IconFace

  // Size can be predefined (string in "rem" units) or free string value like "50px". Use
  // string value for your own risk.
  size?: IconSize | string

  // SVG stroke color.
  color?: string

  // SVG fill color.
  fill?: string

  // Not used directly in icon, placed here con consistent usage in button component
  // along with other icon props.
  position?: IconPosition
}
