/**
 * This code was taken from:
 * https://www.jayfreestone.com/writing/react-portals-with-hooks/
 * Thanks to author!
 */

import { useRef, useEffect } from 'react'

/**
 * Creates DOM element to be used as React root.
 * @returns {Element}
 */
const createRootElement = (id: string): Element => {
  const rootContainer = document.createElement('div')
  rootContainer.setAttribute('id', id)
  return rootContainer
}

/**
 * Appends element as last child of body.
 * @param {Element} rootElement
 */
const addRootElement = (rootElement: Element) => {
  document.body.appendChild(rootElement)
}

/**
 * Hook to create a React Portal.
 * Automatically handles creating and tearing-down the root elements (no SRR
 * makes this trivial), so there is no need to ensure the parent target already
 * exists.
 * @example
 * const target = usePortal(id, [id]);
 * return createPortal(children, target);
 * @param {String} id The id of the target container, e.g 'modal' or 'spotlight'
 * @returns {HTMLElement} The DOM node to use as the Portal target.
 */
export const usePortal = (id: string): HTMLElement => {
  const rootElementRef = useRef<{ item: HTMLElement | null }>({ item: null })

  useEffect(() => {
    // Look for existing target dom element to append to
    const existingParent = document.querySelector(`#${id}`)
    // Parent is either a new root or the existing dom element
    const parentElement = existingParent || createRootElement(id)

    // If there is no existing DOM element, add a new one.
    if (!existingParent) {
      addRootElement(parentElement)
    }

    // Add the detached element to the parent
    if (rootElementRef.current?.item) {
      parentElement.appendChild(rootElementRef.current.item)
    }

    return () => {
      if (rootElementRef.current?.item) {
        rootElementRef.current.item.remove()
      }
      if (!parentElement.childElementCount) {
        parentElement.remove()
      }
    }
  }, [id])

  /**
   * It's important we evaluate this lazily:
   * - We need first render to contain the DOM element, so it shouldn't happen
   *   in useEffect. We would normally put this in the constructor().
   * - We can't do 'const rootElemRef = useRef(document.createElement('div))',
   *   since this will run every single render (that's a lot).
   * - We want the ref to consistently point to the same DOM element and only
   *   ever run once.
   * @link https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
   */
  const getRootElement = () => {
    if (!rootElementRef.current?.item) {
      rootElementRef.current.item = document.createElement('div')
    }
    return rootElementRef.current.item
  }

  return getRootElement()
}
