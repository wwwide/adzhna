import { ReactNode } from 'react';
export declare const useComponentsGuts: (dataSource: {
    label: ReactNode;
    value: any;
    searchLabel?: string | undefined;
}[], value: any, onChange: (value: any, error?: string | undefined) => void, hasSearch: boolean, onSearch?: ((term: string) => void) | undefined, validator?: ((value: any) => string | undefined) | undefined) => {
    boxRef: import("react").RefObject<HTMLDivElement>;
    dropDownRef: import("react").RefObject<HTMLDivElement>;
    dropDownTop: number;
    innerRef: import("react").MutableRefObject<any>;
    innerRect: DOMRect | null;
    scrollAndResizeHandler: () => void;
    dropDownVisible: boolean;
    closeDropDown: () => void;
    openDropDown: () => void;
    switchDropDown: () => void;
    onOptionSelect: (value: any) => void;
    keyboardHandler: (event: import("react").KeyboardEvent<HTMLDivElement>) => boolean;
    focused: boolean;
    onFocus: () => void;
    onBlur: () => void;
    highlightedValue: undefined;
    onSearchTermChange: (term: string) => void;
    valueOption: {
        label: ReactNode;
        value: any;
        searchLabel?: string | undefined;
    } | undefined;
};
