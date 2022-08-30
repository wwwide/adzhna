import { ReactNode, useCallback, useRef } from 'react'
import { useDropDownVisibility } from './useDropDownVisibility'
import { useScrollAndResizeHandler } from './useScrollAndResizeHandler'
import { useKeyboardHandler } from './useKeyboardHandler'
import { useFocus } from './useFocus'
import { useHighlightedItem } from './useHighlightedItem'
import { useScrollToItem } from './useScrollToItem'
import { useDataSourceValidation } from './useDataSourceValidation'

export const useComponentsGuts = (
  dataSource: { label: ReactNode; value: any; searchLabel?: string }[],
  value: any,
  onChange: (value: any, error?: string) => void,
  hasSearch: boolean,
  closeOnScroll: boolean,
  onSearch?: (term: string) => void,
  validator?: (value: any) => string | undefined,
) => {
  const boxRef = useRef<HTMLDivElement>(null)
  const dropDownRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<any>(null)
  const { scrollToItem } = useScrollToItem(dropDownRef, dataSource)
  const valueOption = dataSource.find((i) => i.value === value)
  const { dropDownTop, innerRect, scrollAndResizeHandler } = useScrollAndResizeHandler(innerRef, dropDownRef)
  const { dropDownVisible, openDropDown, closeDropDown, switchDropDown } = useDropDownVisibility(
    scrollAndResizeHandler,
    scrollToItem,
    value,
  )
  const { focused, onFocus, onBlur } = useFocus(closeDropDown)
  const { highlightedValue, setHighlightedValue } = useHighlightedItem(dataSource, scrollToItem, value)

  const enhancedScrollAndResizeHandler = useCallback(() => {
    if (closeOnScroll) {
      closeDropDown()
    }
    scrollAndResizeHandler
  }, [closeOnScroll, closeDropDown, scrollAndResizeHandler])

  const onOptionSelect = useCallback(
    (value: any) => {
      onChange(value, validator ? validator(value) : undefined)
      closeDropDown()
    },
    [onChange, validator, closeDropDown],
  )

  const onSearchTermChange = useCallback(
    (term: string) => {
      if (onSearch) {
        onChange(null, validator ? validator(null) : undefined)
        onSearch(term)
        openDropDown()
      }
    },
    [onSearch, onChange, validator, openDropDown],
  )

  const { keyboardHandler } = useKeyboardHandler(
    openDropDown,
    closeDropDown,
    setHighlightedValue,
    onOptionSelect,
    focused,
    dropDownVisible,
    highlightedValue,
  )

  useDataSourceValidation(hasSearch, dataSource)

  return {
    boxRef,
    dropDownRef,
    dropDownTop,
    innerRef,
    innerRect,
    dropDownVisible,
    closeDropDown,
    openDropDown,
    switchDropDown,
    onOptionSelect,
    keyboardHandler,
    focused,
    onFocus,
    onBlur,
    highlightedValue,
    onSearchTermChange,
    valueOption,
    scrollAndResizeHandler: enhancedScrollAndResizeHandler,
  }
}
