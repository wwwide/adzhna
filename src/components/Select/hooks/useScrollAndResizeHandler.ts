import { MutableRefObject, useCallback, useEffect, useState } from 'react'
import { useTopPosition } from '../../../hooks'

export const useScrollAndResizeHandler = (
  innerRef: MutableRefObject<HTMLDivElement | null>,
  dropDownRef: MutableRefObject<HTMLDivElement | null>,
) => {
  const [innerRect, setInnerRect] = useState<DOMRect | null>(null)

  const scrollAndResizeHandler = useCallback(() => {
    setInnerRect(innerRef.current ? innerRef.current.getBoundingClientRect() : null)
  }, [innerRef])

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
