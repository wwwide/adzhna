/**
 * Try to get value corresponding to mask. Expected, that proper value should contain
 * mask formatter symbols.
 * @param {string} value - raw value
 * @param {(string | RegExp)[]} mask - mask
 * @param {string} accumulator - accumulated valid value.
 */
export declare const adjustValueToMask: (value: string, mask: (string | RegExp)[], accumulator?: string) => string;
