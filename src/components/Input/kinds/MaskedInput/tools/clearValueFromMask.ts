import { isRegExp } from './isRegExp'

export const clearValueFromMask = (value: string, mask: (string | RegExp)[], accumulator = '') => {
  if (mask?.length && value?.length) {
    if (!isRegExp(mask[0])) {
      return clearValueFromMask(value.substring(1), mask.slice(1), accumulator)
    }
    return clearValueFromMask(value.substring(1), mask.slice(1), accumulator + value[0])
  }
  return accumulator
}
