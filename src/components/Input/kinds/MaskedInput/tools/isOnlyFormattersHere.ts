import { isRegExp } from './isRegExp'

export const isOnlyFormattersHere = (value: string, mask: (string | RegExp)[]) => {
  return mask.slice(0, value.length).every((i) => !isRegExp(i))
}
