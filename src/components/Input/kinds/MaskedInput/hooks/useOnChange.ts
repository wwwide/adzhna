import { MutableRefObject, useCallback } from 'react'
import { adjustValueToMask, adjustCursorPosition } from '../tools'

/**
 * Handle user input and prepare formatted and clear values.
 * @param currentValue - current value (formatted)
 * @param mask - mask
 * @param input - reference to input control
 * @param handler - original onChange handler
 */
export const useOnChange = (
  currentValue: string,
  mask: (string | RegExp)[],
  input: MutableRefObject<HTMLInputElement>,
  handler?: (value: string, error?: string) => void,
) => {
  const onChange = useCallback((value: string, error?: string) => {
    if (handler) {
      if (value.length > mask.length) {
        return
      }

      const newValue = adjustValueToMask(value, mask)
      const cursor = adjustCursorPosition(newValue, currentValue, input, mask)

      handler(newValue, error)

      setTimeout(() => {
        input.current.selectionStart = input.current.selectionEnd = cursor
      }, 0)
    }
  }, [handler, currentValue])

  return {
    onChange,
  }
}
