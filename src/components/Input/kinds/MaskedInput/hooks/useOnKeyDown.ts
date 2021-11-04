import { KeyboardEvent, MutableRefObject, useCallback } from 'react'
import { isOnlyFormattersHere, isRegExp } from '../tools'

/**
 * Handler preventing deleting symbols in some edge cases.
 * @param value - input value
 * @param mask - input mask
 * @param input - reference to input
 */
export const useOnKeyDown = (
  value: string,
  mask: (string | RegExp)[],
  input: MutableRefObject<HTMLInputElement | null>,
) => {
  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      const noSelection = input?.current?.selectionStart === input?.current?.selectionEnd
      const index = input?.current?.selectionStart || 0
      const onlyFormatters = isOnlyFormattersHere(value, mask)

      if (event.key === 'ArrowLeft') {
        if (mask.slice(0, index).every((i) => !isRegExp(i))) {
          event.preventDefault()
        }
      }

      if (event.key === 'Delete' && noSelection) {
        if (!isRegExp(mask[index])) {
          event.preventDefault()
        }
      }

      if (event.key === 'Backspace' && noSelection) {
        if (onlyFormatters) {
          event.preventDefault()
        } else if (!isRegExp(mask[index - 1])) {
          event.preventDefault()
          if (input.current) {
            input.current.selectionStart = input.current.selectionEnd = index - 1
          }
        }
      }
    },
    [input, mask, value],
  )

  return { onKeyDown }
}
