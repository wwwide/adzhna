import { isRegExp } from './isRegExp'

/**
 * Try to get value corresponding to mask. Expected, that proper value should contain
 * mask formatter symbols.
 * @param {string} value - raw value
 * @param {(string | RegExp)[]} mask - mask
 * @param {string} accumulator - accumulated valid value.
 */
export const adjustValueToMask = (value: string, mask: (string | RegExp)[], accumulator = ''): string => {
  if (mask?.length && value.length) {
    if (!isRegExp(mask[0])) {
      if (mask[0] === value[0]) {
        return adjustValueToMask(value.substring(1), mask.slice(1), accumulator + mask[0])
      } else {
        return adjustValueToMask(value, mask.slice(1), accumulator + mask[0])
      }
    }
    if ((mask[0] as RegExp).test(value[0])) {
      return adjustValueToMask(value.substring(1), mask.slice(1), accumulator + value[0])
    }
    return adjustValueToMask(value.substring(1), mask, accumulator)
  }

  const firstValueSymbolIndex = mask.findIndex(i => isRegExp(i))

  return accumulator + (firstValueSymbolIndex > 0 ? mask.slice(0, firstValueSymbolIndex).join('') : '')
}
