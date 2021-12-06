import React, { ReactNode, useCallback, useState } from 'react'
import { Confirmation as C } from './Confirmation'
import { ButtonFace } from '../Button'
import { DialogFace } from '../Dialog'

type Options = {
  message: string | ReactNode
  onConfirm: () => any
  confirmationButton?: {
    text: string | ReactNode
    face?: ButtonFace
  }
  face?: DialogFace
  isConfirmationNegative?: boolean
  dialogId?: string
  title?: string | ReactNode
}

export const useConfirmation = (opts: Options) => {
  const [isOpen, setOpen] = useState(false)
  const open = useCallback(() => setOpen(true), [setOpen])

  const onConfirm = () => {
    setOpen(false)
    opts.onConfirm()
  }

  const Confirmation = useCallback(
    () => (
      <C
        face={opts.face}
        open={isOpen}
        id={opts.dialogId || 'confirmation-dialog'}
        message={opts.message}
        onConfirm={onConfirm}
        onCancel={() => setOpen(false)}
        confirmationButton={opts.confirmationButton}
        title={opts.title}
      />
    ),
    [isOpen, setOpen, onConfirm, opts],
  )

  return {
    Confirmation,
    open,
  }
}
