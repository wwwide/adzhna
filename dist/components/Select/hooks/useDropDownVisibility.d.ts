export declare const useDropDownVisibility: (scrollHandler: () => void, scrollToItem: (value: any, direction: 'start' | 'end') => void, value: any) => {
    dropDownVisible: boolean;
    openDropDown: () => void;
    closeDropDown: () => void;
    switchDropDown: () => void;
};
