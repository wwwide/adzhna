import { ButtonHTMLAttributes } from 'react'
import { ButtonFace } from './ButtonFace'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  face?: ButtonFace
  outlined?: boolean
}
