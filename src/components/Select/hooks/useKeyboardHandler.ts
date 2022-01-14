import { KeyboardEvent, useCallback } from 'react'

export const useKeyboardHandler = (
  openDropDown: () => void,
  closeDropDown: () => void,
  setActiveItem: (direction: 'previous' | 'next') => void,
  onSelect: (value: any) => void,
  focused: boolean,
  isOpen: boolean,
  activeValue: any,
) => {
  const keyboardHandler = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      switch (event.key) {
        case 'Escape': {
          closeDropDown()
          break
        }
        case 'ArrowUp': {
          if (isOpen) {
            setActiveItem('previous')
            event.preventDefault()
          }
          break
        }
        case 'ArrowDown': {
          if (!isOpen && focused) {
            openDropDown()
            event.preventDefault()
          } else if (isOpen) {
            setActiveItem('next')
            event.preventDefault()
          }
          break
        }
        case 'Enter': {
          if (focused) {
            closeDropDown()
            onSelect(activeValue)
          }
          break
        }
        case 'Tab': {
          if (focused) {
            closeDropDown()
            return true
          }
        }
      }

      return false
    },
    [openDropDown, closeDropDown, focused, isOpen, setActiveItem, onSelect],
  )

  return {
    keyboardHandler,
  }
}
