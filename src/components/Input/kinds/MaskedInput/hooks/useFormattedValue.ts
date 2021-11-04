import { adjustValueToMask } from '../tools'

/**
 * Adjust raw value to given mask.
 * @param value - raw value
 * @param mask - input mask
 */
export const useFormattedValue = (value: string, mask: (string | RegExp)[]) => adjustValueToMask(value, mask)
