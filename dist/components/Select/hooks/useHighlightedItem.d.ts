import { ReactNode } from 'react';
export declare const useHighlightedItem: (dataSource: {
    label: string | ReactNode;
    value: any;
}[], scrollToItem: (value: any, direction: 'start' | 'end') => void, value: any) => {
    highlightedValue: undefined;
    setHighlightedValue: (direction: 'previous' | 'next') => void;
};
