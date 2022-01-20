import React, { FC } from 'react'
import { Dialog } from '../Dialog'
import { Button } from '../Button'
import { ConfirmationProps } from './ConfirmationProps'
import { ActionsWrapper, ConfirmationContainer } from './style'

export const Confirmation: FC<ConfirmationProps> = (props) => {
  const { id, onCancel, message, onConfirm, confirmationButton, cancelButton, title, face, open } = props

  return (
    <Dialog open={open} id={id} onClose={onCancel} header={{ title }} face={face}>
      <ConfirmationContainer>
        {message}
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
