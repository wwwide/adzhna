import { isRegExp } from './isRegExp'

/**
 * Check whether given string contains only formatting symbols.
 * @param value - value to be checked
 * @param mask - input mask
 */
export const isOnlyFormattersHere = (value: string, mask: (string | RegExp)[]) => {
  return mask.slice(0, value.length).every((i) => !isRegExp(i))
}
