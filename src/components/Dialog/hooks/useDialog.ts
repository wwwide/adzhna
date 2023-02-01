import { useKeyBoard } from './useKeyboard'
import { useOverflow } from './useOverflow'

export const useDialog = (open: boolean, scrollableContainers: string[], closeHander: () => void) => {
  const { overlayRef } = useKeyBoard(open, closeHander)
  useOverflow(open, scrollableContainers)
  return {
    overlayRef,
  }
}
