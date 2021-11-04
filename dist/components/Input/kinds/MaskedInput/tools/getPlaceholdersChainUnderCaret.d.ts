/**
 * Get chain of formatting symbols under current caret position.
 * @param caret - caret position
 * @param mask - input mask
 */
export declare const getPlaceholdersChainUnderCaret: (caret: number, mask: (string | RegExp)[]) => string[];
