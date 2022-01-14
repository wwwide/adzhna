import { KeyboardEvent } from 'react';
export declare const useKeyboardHandler: (openDropDown: () => void, closeDropDown: () => void, setActiveItem: (direction: 'previous' | 'next') => void, onSelect: (value: any) => void, focused: boolean, isOpen: boolean, activeValue: any) => {
    keyboardHandler: (event: KeyboardEvent<HTMLDivElement>) => boolean;
};
