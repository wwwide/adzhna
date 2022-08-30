import { useEffect } from 'react'

export const useBehavior = (open: boolean, scrollableContainers: string[]) => {
  useEffect(() => {
    if (open) {
      document.body.setAttribute('data-overflow', document.body.style.overflow)
      document.body.setAttribute('overflow', 'hidden')

      scrollableContainers.forEach((container) => {
        const item = document.querySelector(container)
        if (item) {
          item.setAttribute('data-overflow', item.getAttribute('overflow') || '')
          item.setAttribute('overflow', 'hidden')
        }
      })
    } else {
      const old = document.body.getAttribute('data-overflow')
      if (old) {
        document.body.setAttribute('overflow', old)
      } else {
        document.body.removeAttribute('overflow')
      }

      scrollableContainers.forEach((container) => {
        const item = document.querySelector(container)
        if (item) {
          const old = item.getAttribute('data-overflow')
          if (old) {
            item.setAttribute('overflow', old)
          } else {
            item.removeAttribute('overflow')
          }
        }
      })
    }
  }, [open])
}
