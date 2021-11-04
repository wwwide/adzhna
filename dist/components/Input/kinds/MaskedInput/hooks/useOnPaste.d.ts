import { ClipboardEvent } from 'react';
/**
 * Handler preventing pasting from clipboard.
 */
export declare const useOnPaste: () => {
    onPaste: (event: ClipboardEvent) => void;
};
