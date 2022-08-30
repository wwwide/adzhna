import React from 'react'

export const useViewportUpdateListener = (handler: () => void, shouldSubscribe: boolean, selectors?: string[]) => {
  React.useEffect(() => {
    // Window.
    if (shouldSubscribe) {
      window.addEventListener('scroll', handler)
      window.addEventListener('resize', handler)
    } else {
      window.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)
    }

    // Optional selectors.
    if (selectors && selectors.length) {
      selectors.forEach((node) => {
        const item = document.querySelector(node)

        if (item && shouldSubscribe) {
          item.addEventListener('scroll', handler)
          item.addEventListener('resize', handler)
        } else if (item) {
          item.removeEventListener('scroll', handler)
          item.removeEventListener('resize', handler)
        }
      })
    }

    // Unsubscribe.
    return () => {
      window.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)

      if (selectors && selectors.length) {
        selectors.forEach((node) => {
          const item = document.querySelector(node)

          if (item) {
            item.removeEventListener('scroll', handler)
            item.removeEventListener('resize', handler)
          }
        })
      }
    }
  }, [handler, shouldSubscribe])
}
