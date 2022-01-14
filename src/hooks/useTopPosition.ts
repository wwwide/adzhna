import { MutableRefObject } from 'react'

type AdditionalPosition = {
  top?: number
  left?: number
  right?: number
}

interface Options {
  innerRect: DOMRect | null
  /**
   * The element must be without style display: none, use visibility: hidden.
   * Because current.offsetHeight not working with display: none
   */
  boxRef: MutableRefObject<any>
  additionalPosition: AdditionalPosition
}

export const useTopPosition = (opts: Options) => {
  const { innerRect, additionalPosition, boxRef } = opts

  if (!innerRect) {
    return 0
  }

  const topPosition = innerRect.top + innerRect.height + (additionalPosition.top || 0)

  const topView =
    topPosition + (boxRef.current ? boxRef.current.offsetHeight : 0) >= document.documentElement.clientHeight

  if (!topView) {
    return topPosition
  }

  if (boxRef.current) {
    return innerRect.top - boxRef.current.offsetHeight - (additionalPosition.top || 0)
  }

  return topPosition
}
