import { ButtonHTMLAttributes } from 'react'
import { ButtonFace } from './ButtonFace'
import { IconProps } from '../Icon'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  face?: ButtonFace
  icon?: IconProps
  outlined?: boolean
}
