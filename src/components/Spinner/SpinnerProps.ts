import { ReactNode } from 'react'

export interface SpinnerProps {
  children?: ReactNode
  size?: number
  color?: string
  durationInSeconds?: number
  centered?: boolean
  visible?: boolean
}
