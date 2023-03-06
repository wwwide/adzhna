import { ReactNode } from 'react'
import { CSSProperties } from 'styled-components'
import { ButtonFace } from '../Button'
import { DialogFace } from '../Dialog'

export interface ConfirmationProps {
  id: string
  message: string | ReactNode
  open: boolean
  onConfirm: () => void
  confirmationButton?: {
    text: string | ReactNode
    face?: ButtonFace
  }
  cancelButton?: {
    text: string | ReactNode
  }
  onCancel: () => void
  title?: string | ReactNode
  face?: DialogFace
  style?: CSSProperties
}
