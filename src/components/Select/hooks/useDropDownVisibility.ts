import { useCallback, useState } from 'react'

export const useDropDownVisibility = (
  scrollHandler: () => void,
  scrollToItem: (value: any, direction: 'start' | 'end') => void,
  value: any,
) => {
  const [dropDownVisible, setDropDownVisible] = useState(false)

  const openDropDown = useCallback(() => {
    setDropDownVisible(true)
    scrollHandler()
    scrollToItem(value, 'start')
  }, [setDropDownVisible, scrollHandler, scrollToItem, value])

  const closeDropDown = useCallback(() => setDropDownVisible(false), [setDropDownVisible])
  const switchDropDown = dropDownVisible ? closeDropDown : openDropDown
  return {
    dropDownVisible,
    openDropDown,
    closeDropDown,
    switchDropDown,
  }
}
