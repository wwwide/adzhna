import { KeyboardEventHandler, CSSProperties, MouseEventHandler, ReactNode } from 'react'
import { CardFace } from './CardFace'

export interface CardProps {
  className?: string
  children?: ReactNode
  contentId?: string
  contentClassName?: string
  footerClassName?: string
  contentStyle?: CSSProperties | undefined
  footerStyle?: CSSProperties | undefined
  face?: CardFace
  header?: {
    actions?: ReactNode
    title?: ReactNode
    headerClassName?: string
    headerStyle?: CSSProperties | undefined
    titleClassName?: string
    titleStyle?: CSSProperties | undefined
  }
  footer?: ReactNode
  style?: CSSProperties | undefined
  width?: string
  onClick?: MouseEventHandler<HTMLElement | undefined>
  pending?: boolean
  headerPending?: boolean
  contentPending?: boolean
  footerPending?: boolean
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>
}
