import { MutableRefObject } from 'react';
/**
 * Handle user input and prepare formatted and clear values.
 * @param currentValue - current value (formatted)
 * @param mask - mask
 * @param input - reference to input control
 * @param handler - original onChange handler
 */
export declare const useOnChange: (currentValue: string, mask: (string | RegExp)[], input: MutableRefObject<HTMLInputElement | null>, handler?: ((value: string, error?: string | undefined) => void) | undefined) => {
    onChange: (value: string, error?: string | undefined) => void;
};
