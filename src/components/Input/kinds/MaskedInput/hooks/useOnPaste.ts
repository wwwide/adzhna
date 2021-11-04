import { ClipboardEvent, useCallback } from 'react'

/**
 * Handler preventing pasting from clipboard.
 */
export const useOnPaste = () => {
  const onPaste = useCallback((event: ClipboardEvent) => {
    event.preventDefault()
  }, [])

  return { onPaste }
}
