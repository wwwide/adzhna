import { useCallback, useState } from 'react'

export const useFocus = (closeDropDown: () => void) => {
  const [focused, setFocused] = useState(false)

  const onFocus = useCallback(() => setFocused(true), [setFocused])

  const onBlur = useCallback(() => {
    setFocused(false)
    closeDropDown()
  }, [setFocused, closeDropDown])

  return {
    focused,
    onFocus,
    onBlur,
  }
}
