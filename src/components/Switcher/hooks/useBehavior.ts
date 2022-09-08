import { useCallback } from 'react'
import { SwitcherItem } from '../SwitcherItem'

export const useBehavior = <T>(
  items: SwitcherItem<T>[],
  value: T | T[] | undefined,
  onChange: (value: T | T[], error?: string) => void,
  multiple: boolean,
) => {
  if (
    items.some((item, index) => {
      const duplicatedIndex = items.findIndex((i) => i.value === item.value)
      return duplicatedIndex !== -1 && duplicatedIndex !== index
    })
  ) {
    throw new Error('Items contain duplicated values')
  }

  if (multiple && !Array.isArray(value)) {
    throw new Error('Multiple selection is enabled but given value is not an array')
  }

  const changeHandler = useCallback(
    (itemValue: T) => {
      if (multiple && Array.isArray(value)) {
        const index = value.indexOf(itemValue)
        if (index === -1) {
          onChange(value.concat(itemValue))
        } else {
          const copy = [...value]
          copy.splice(index, 1)
          onChange(copy)
        }
      } else {
        onChange(itemValue)
      }
    },
    [onChange, multiple, value],
  )

  const isSelected = useCallback(
    (itemValue: T, value: T | T[] | undefined) => {
      if (Array.isArray(value) && multiple) {
        return value.indexOf(itemValue) !== -1
      }
      return itemValue === value
    },
    [multiple],
  )

  return {
    changeHandler,
    isSelected,
  }
}
