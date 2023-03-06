import React, { FC, memo, MouseEvent, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { DialogProps } from './DialogProps'
import { usePortal } from './usePortal'
import { getCloseIconFaceByDialogFace } from './getCloseIconFaceByDialogFace'
import { useDialog } from './hooks'

import { Actions, CloseIcon, Overlay, Window } from './styles'

export const Dialog: FC<DialogProps> = memo((props) => {
  const {
    children,
    face = 'default',
    id,
    open,
    onClose,
    header,
    pending,
    headerPending,
    footerPending,
    contentPending,
    scrollableContainers, 
    ...rest
  } = props

  const root = usePortal(id, open)

  const { overlayRef } = useDialog(open, scrollableContainers || [], onClose)

  if (!root) {
    return null
  }

  const stopBubbling = useCallback((event: MouseEvent<HTMLElement>) => event.stopPropagation(), [])
  const actions = header?.actions

  return createPortal(
    <Overlay $open={open} onClick={onClose} tabIndex={0} ref={overlayRef}>
      <Window
        contentId={`${id}-content`}
        pending={pending}
        headerPending={headerPending}
        footerPending={footerPending}
        contentPending={contentPending}
        face={face}
        onClick={stopBubbling}
        header={{
          ...header,
          actions: (
            <Actions>
              {actions}
              <CloseIcon name="delete-circle" size="L" face={getCloseIconFaceByDialogFace(face)} onClick={onClose} />
            </Actions>
          ),
        }}
        {...rest}
      >
        {children}
      </Window>
    </Overlay>,
    root,
  )
})
