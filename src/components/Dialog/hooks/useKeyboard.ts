import { useCallback, useEffect, useRef } from 'react'

export const useKeyBoard = (open: boolean, closeHander: () => void) => {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      overlayRef.current?.focus()
      const firstInput = overlayRef.current?.querySelector('input')
      firstInput?.focus()
    }
  }, [open])

  const keyboardHandler = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        closeHander()
      }
    },
    [closeHander],
  )

  useEffect(() => {
    document.addEventListener('keydown', keyboardHandler)
    return () => {
      document.removeEventListener('keydown', keyboardHandler)
    }
  }, [keyboardHandler])

  return {
    overlayRef,
  }
}
