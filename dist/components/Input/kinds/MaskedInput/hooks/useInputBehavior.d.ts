import { MutableRefObject } from 'react';
/**
 * Get together all input related behaviour hooks.
 * @param rawValue - raw input value
 * @param mask - input mask
 * @param input - reference to input control
 * @param handler - change handler
 */
export declare const useInputBehavior: (rawValue: string, mask: (string | RegExp)[], input: MutableRefObject<HTMLInputElement | null>, handler?: ((value: string, error?: string | undefined) => void) | undefined) => {
    formattedValue: string;
    onChange: (value: string, error?: string | undefined) => void;
    onKeyDown: (event: import("react").KeyboardEvent<HTMLInputElement>) => void;
    onPaste: (event: import("react").ClipboardEvent<Element>) => void;
};
