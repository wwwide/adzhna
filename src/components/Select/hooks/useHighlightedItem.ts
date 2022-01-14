import { ReactNode, useCallback, useEffect, useState } from 'react'

export const useHighlightedItem = (
  dataSource: { label: string | ReactNode; value: any }[],
  scrollToItem: (value: any, direction: 'start' | 'end') => void,
  value: any,
) => {
  const [highlightedValue, setHighlighted] = useState()

  useEffect(() => {
    setHighlighted(value)
  }, [setHighlighted, value])

  const setHighlightedValue = useCallback(
    (direction: 'previous' | 'next') => {
      const activeIndex = dataSource.findIndex((i) => i.value === highlightedValue)

      if (activeIndex === -1) {
        if (dataSource.length) {
          setHighlighted(dataSource[0].value)
          scrollToItem(dataSource[0].value, 'start')
        }
        return
      }

      if (direction === 'previous') {
        if (activeIndex === 0) {
          setHighlighted(dataSource[0].value)
          scrollToItem(dataSource[0].value, 'start')
        } else {
          setHighlighted(dataSource[activeIndex - 1].value)
          scrollToItem(dataSource[activeIndex - 1].value, 'start')
        }
      } else {
        if (activeIndex === dataSource.length - 1) {
          setHighlighted(dataSource[dataSource.length - 1].value)
          scrollToItem(dataSource[dataSource.length - 1].value, 'end')
        } else {
          setHighlighted(dataSource[activeIndex + 1].value)
          scrollToItem(dataSource[activeIndex + 1].value, 'end')
        }
      }
    },
    [highlightedValue, setHighlighted, scrollToItem, dataSource],
  )

  return {
    highlightedValue,
    setHighlightedValue,
  }
}
