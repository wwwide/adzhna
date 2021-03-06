import { MutableRefObject } from 'react'
import { useOnChange } from './useOnChange'
import { useFormattedValue } from './useFormattedValue'
import { useOnKeyDown } from './useOnKeyDown'
import { useOnPaste } from './useOnPaste'

/**
 * Get together all input related behaviour hooks.
 * @param rawValue - raw input value
 * @param mask - input mask
 * @param input - reference to input control
 * @param handler - change handler
 */
export const useInputBehavior = (
  rawValue: string,
  mask: (string | RegExp)[],
  input: MutableRefObject<HTMLInputElement | null>,
  handler?: (value: string, error?: string) => void,
) => {
  const formattedValue = useFormattedValue(rawValue, mask)
  const { onKeyDown } = useOnKeyDown(formattedValue, mask, input)
  const { onChange } = useOnChange(formattedValue, mask, input, handler)
  const { onPaste } = useOnPaste()

  return {
    formattedValue,
    onChange,
    onKeyDown,
    onPaste,
  }
}
