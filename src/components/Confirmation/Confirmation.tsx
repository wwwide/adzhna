import React, { FC, useCallback, useEffect } from 'react'
import { Dialog } from '../Dialog'
import { Button } from '../Button'
import { ConfirmationProps } from './ConfirmationProps'

import { ActionsWrapper, ConfirmationContainer, _Message } from './style'

export const Confirmation: FC<ConfirmationProps> = (props) => {
  const { id, onCancel, message, onConfirm, confirmationButton, cancelButton, title, face, open, ...rest } = props

  const keyboardHandler = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === 'Enter') {
        onConfirm()
      }
    },
    [onConfirm],
  )

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', keyboardHandler)
    }
    return () => {
      document.removeEventListener('keydown', keyboardHandler)
    }
  }, [keyboardHandler])

  return (
    <Dialog open={open} id={id} onClose={onCancel} header={{ title }} face={face} {...rest}>
      <ConfirmationContainer>
        <_Message>{message}</_Message>
        <ActionsWrapper>
          <Button face={confirmationButton?.face || 'primary'} onClick={onConfirm}>
            {confirmationButton?.text || 'OK'}
          </Button>
          <Button face="light" onClick={onCancel}>
            {cancelButton?.text || 'Cancel'}
          </Button>
        </ActionsWrapper>
      </ConfirmationContainer>
    </Dialog>
  )
}
