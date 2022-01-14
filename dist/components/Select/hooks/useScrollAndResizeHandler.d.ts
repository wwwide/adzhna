import { MutableRefObject } from 'react';
export declare const useScrollAndResizeHandler: (innerRef: MutableRefObject<HTMLDivElement | null>, dropDownRef: MutableRefObject<HTMLDivElement | null>) => {
    innerRect: DOMRect | null;
    dropDownTop: number;
    scrollAndResizeHandler: () => void;
};
