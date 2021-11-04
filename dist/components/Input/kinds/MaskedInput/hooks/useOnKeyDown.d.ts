import { KeyboardEvent, MutableRefObject } from 'react';
/**
 * Handler preventing deleting symbols in some edge cases.
 * @param value - input value
 * @param mask - input mask
 * @param input - reference to input
 */
export declare const useOnKeyDown: (value: string, mask: (string | RegExp)[], input: MutableRefObject<HTMLInputElement | null>) => {
    onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
};
