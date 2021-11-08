import { CSSProperties } from 'react'
import { ButtonFace } from '../Button'

export interface PaginationProps {
  page: number
  size: number
  total: number
  onChange: (page: number, size: number) => void
  maxInlinePages?: number
  disabled?: boolean
  className?: string
  style?: CSSProperties | undefined
  pageButtonFace?: ButtonFace
  activePageButtonFace?: ButtonFace
  arrowPageButtonFace?: ButtonFace
  pageButtonClassName?: string
  activePageButtonClassName?: string
  arrowPageButtonClassName?: string
  pageButtonStyle?: CSSProperties | undefined
  activePageButtonStyle?: CSSProperties | undefined
  arrowPageButtonStyle?: CSSProperties | undefined
}
