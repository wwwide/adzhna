import { MutableRefObject } from 'react';
declare type AdditionalPosition = {
    top?: number;
    left?: number;
    right?: number;
};
interface Options {
    innerRect: DOMRect | null;
    /**
     * The element must be without style display: none, use visibility: hidden.
     * Because current.offsetHeight not working with display: none
     */
    boxRef: MutableRefObject<any>;
    additionalPosition: AdditionalPosition;
}
export declare const useTopPosition: (opts: Options) => number;
export {};
