import { isRegExp } from './isRegExp'

export const getPlaceholdersChainUnderCaret = (
  caret: number,
  mask: (string | RegExp)[],
  accumulator: string[] = [],
) => {
  if (isRegExp(mask[caret]) || caret >= mask.length - 1) {
    return accumulator
  }
  return getPlaceholdersChainUnderCaret(
    caret + 1,
    mask,
    accumulator.concat(mask[caret] as string))
}
