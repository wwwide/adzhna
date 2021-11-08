import { CSSProperties } from 'react'
import { ButtonFace } from '../../../Button'

export interface PageProps {
  number: number
  onClick: (number: number) => void
  active?: boolean
  pageButtonFace?: ButtonFace
  activePageButtonFace?: ButtonFace
  arrowPageButtonFace?: ButtonFace
  pageButtonClassName?: string
  activePageButtonClassName?: string
  arrowPageButtonClassName?: string
  pageButtonStyle?: CSSProperties | undefined
  activePageButtonStyle?: CSSProperties | undefined
  arrowPageButtonStyle?: CSSProperties | undefined
  arrow?: boolean
  disabled?: boolean
}
