import { MutableRefObject } from 'react'
import { getPlaceholdersChainUnderCaret } from './getPlaceholdersChainUnderCaret'
import { isOnlyFormattersHere } from './isOnlyFormattersHere'

/**
 * Place caret to proper position after value change.
 * @param newValue - new value
 * @param oldValue - previous value
 * @param input reference to HTML input control
 * @param mask - mask
 */
export const adjustCursorPosition = (
  newValue: string,
  oldValue: string,
  input: MutableRefObject<HTMLInputElement | null>,
  mask: (string | RegExp)[],
): number => {
  const caret = input.current?.selectionStart || 0
  let cursor = 1000000
  let length = newValue.length - oldValue.length
  const start = caret - length

  if (length > 0) {
    const placeholders = getPlaceholdersChainUnderCaret(caret, mask)
    length += placeholders.length
    cursor = start + length
  } else if (length < 0) {
    cursor = caret
    if (isOnlyFormattersHere(newValue, mask)) {
      cursor = 1000000
    }
  }

  return cursor
}
