import { MutableRefObject, ReactNode, useCallback } from 'react'

const isElementVisible = (element: Element, container: Element) => {
  const { bottom, top } = element.getBoundingClientRect()
  const containerRect = container.getBoundingClientRect()
  return top >= containerRect.top && bottom <= containerRect.bottom
}

export const useScrollToItem = (
  dropDownRef: MutableRefObject<HTMLDivElement | null>,
  dataSource: { label: ReactNode; value: any }[],
) => {
  const scrollToItem = useCallback(
    (value: any, direction: 'start' | 'end') => {
      if (dropDownRef.current) {
        const index = dataSource.findIndex((i) => i.value === value)
        const element = dropDownRef.current.querySelector(`div:nth-child(${index + 1}n)`)
        if (element && !isElementVisible(element, dropDownRef.current)) {
          element.scrollIntoView({ block: direction })
        }
      }
    },
    [dataSource],
  )

  return {
    scrollToItem,
  }
}
