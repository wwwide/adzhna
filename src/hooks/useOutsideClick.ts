import { useEffect, MutableRefObject } from 'react'

export const useOutsideClick = (ref: MutableRefObject<any>, callback: (target: HTMLElement) => any) => {
  const handleClick = (event: any) => {
    const isUserSelectsText = window.getSelection()!.type === 'Range'

    if (ref && ref.current && !ref.current.contains(event.target) && !isUserSelectsText) {
      callback(event.target)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick, { capture: true })

    return () => {
      document.removeEventListener('click', handleClick, { capture: true })
    }
  }, [handleClick])
}
