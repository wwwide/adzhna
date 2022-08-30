import { useEffect, useState } from 'react'

type SavedOverflows = {
  [key: string]: string
}

export const useBehavior = (open: boolean, scrollableContainers: string[]) => {
  const [overflows, setOverflows] = useState<SavedOverflows>({
    body: document.body.style.overflow,
  })

  useEffect(() => {
    if (open) {
      const copy = { ...overflows }
      copy.body = document.body.style.overflow
      scrollableContainers.forEach((container) => {
        copy[container] = document.querySelector(container)?.getAttribute('overflow') || ''
      })
      setOverflows(copy)
    } else {
      document.body.style.overflow = overflows.body
      scrollableContainers.forEach((container) => {
        const item = document.querySelector(container)
        if (item) {
          item.setAttribute('overflow', overflows[container])
        }
      })
    }
  }, [open, overflows, setOverflows])
}
