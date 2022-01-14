import { MutableRefObject, ReactNode } from 'react';
export declare const useScrollToItem: (dropDownRef: MutableRefObject<HTMLDivElement | null>, dataSource: {
    label: ReactNode;
    value: any;
}[]) => {
    scrollToItem: (value: any, direction: 'start' | 'end') => void;
};
