import { adjustValueToMask } from '../tools'

export const useFormattedValue = (value: string, mask: (string | RegExp)[]) =>
  adjustValueToMask(value, mask)
