import React, { FC, memo, MouseEvent, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { DialogProps } from './DialogProps'
import { usePortal } from './usePortal'
import { Actions, CloseIcon, Overlay, Window } from './styles'
import { getCloseIconFaceByDialogFace } from './getCloseIconFaceByDialogFace'

export const Dialog: FC<DialogProps> = memo((props) => {
  const { children, face = 'default', id, open, onClose, header, ...rest } = props
  const root = usePortal(id)
  const stopBubbling = useCallback((event: MouseEvent<HTMLElement>) => event.stopPropagation(), [])
  const actions = header?.actions

  return createPortal(
    <Overlay $open={open} onClick={onClose}>
      <Window
        {...rest}
        face={face}
        onClick={stopBubbling}
        header={{
          ...header,
          actions: (
            <Actions>
              {actions}
              <CloseIcon
                name="delete-circle"
                size="L"
                face={getCloseIconFaceByDialogFace(face)}
                onClick={onClose}
              />
            </Actions>
          ),
        }}
      >
        {children}
      </Window>
    </Overlay>,
    root,
  )
})
