import { MutableRefObject, ReactNode, useCallback, useEffect, useState } from 'react'
import { useTopPosition } from '../../../hooks'

export const useScrollAndResizeHandler = (
  innerRef: MutableRefObject<HTMLDivElement | null>,
  dropDownRef: MutableRefObject<HTMLDivElement | null>,
  dataSource: { label: ReactNode; value: any; searchLabel?: string }[],
) => {
  const [innerRect, setInnerRect] = useState<DOMRect | null>(null)

  const scrollAndResizeHandler = useCallback(() => {
    setInnerRect(innerRef.current ? innerRef.current.getBoundingClientRect() : null)
  }, [
    innerRef,
    // Update rect when options are updated.
    dataSource,
  ])

  useEffect(() => {
    scrollAndResizeHandler()
  }, [scrollAndResizeHandler])

  const dropDownTop = useTopPosition({
    innerRect,
    boxRef: dropDownRef,
    additionalPosition: {
      top: 2,
    },
  })

  return {
    innerRect,
    dropDownTop,
    scrollAndResizeHandler,
  }
}
