import { isRegExp } from './isRegExp'

/**
 * Get chain of formatting symbols under current caret position in
 * given direction.
 * @param caret - caret position
 * @param mask - input mask
 * @param direction - direction to search formatters
 * @param accumulator = accumulated value
 */
const getChainTowardDirection = (
  caret: number,
  mask: (string | RegExp)[],
  direction: 'left' | 'right',
  accumulator: string[] = [],
): string[] => {
  if (isRegExp(mask[caret]) || caret >= mask.length - 1) {
    return accumulator
  }
  return getChainTowardDirection(
    direction === 'right' ? caret + 1 : caret - 1,
    mask,
    direction,
    accumulator.concat(mask[caret] as string),
  )
}

/**
 * Get chain of formatting symbols under current caret position.
 * @param caret - caret position
 * @param mask - input mask
 */
export const getPlaceholdersChainUnderCaret = (caret: number, mask: (string | RegExp)[]): string[] => {
  return getChainTowardDirection(caret - 1, mask, 'left', []).concat(getChainTowardDirection(caret, mask, 'right', []))
}
