import { MutableRefObject } from 'react';
/**
 * Place caret to proper position after value change.
 * @param newValue - new value
 * @param oldValue - previous value
 * @param input reference to HTML input control
 * @param mask - mask
 */
export declare const adjustCursorPosition: (newValue: string, oldValue: string, input: MutableRefObject<HTMLInputElement | null>, mask: (string | RegExp)[]) => number;
