import { useEffect } from 'react'

export const useOverflow = (open: boolean, scrollableContainers: string[]) => {
  useEffect(() => {
    if (open) {
      document.body.setAttribute('data-overflow', document.body.style.overflow)
      document.body.style.overflow = 'hidden'

      scrollableContainers.forEach((container) => {
        const item = document.querySelector<HTMLElement>(container)
        if (item) {
          item.setAttribute('data-overflow', item.style.overflow)
          item.style.overflow = 'hidden'
        }
      })
    } else {
      const old = document.body.getAttribute('data-overflow')
      if (old) {
        document.body.style.overflow = old
      } else {
        document.body.style.overflow = ''
      }

      scrollableContainers.forEach((container) => {
        const item = document.querySelector<HTMLElement>(container)
        if (item) {
          const old = item.getAttribute('data-overflow')
          if (old) {
            item.style.overflow = old
          } else {
            item.style.overflow = ''
          }
        }
      })
    }
  }, [open])
}
