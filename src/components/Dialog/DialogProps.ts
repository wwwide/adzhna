import { CSSProp } from 'styled-components'
import { CardProps } from '../Card'

export interface DialogProps extends CardProps {
  id: string
  open: boolean
  onClose: () => void
  pending?: boolean
  headerPending?: boolean
  contentPending?: boolean
  footerPending?: boolean
  scrollableContainers?: string[]
  dialogClassName?: string
  dialogStyles?: CSSProp
}
