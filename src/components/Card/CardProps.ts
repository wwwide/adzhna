import { CSSProperties, ReactNode } from 'react'

export interface CardProps {
  header?: {
    actions?: ReactNode
    title?: ReactNode
  }
  style?: CSSProperties | undefined
  maxWidth?: string
}
