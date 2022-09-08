import { SwitcherItem } from '../SwitcherItem';
export declare const useBehavior: <T>(items: SwitcherItem<T>[], value: T | T[] | undefined, onChange: (value: T | T[], error?: string | undefined) => void, multiple: boolean) => {
    changeHandler: (itemValue: T) => void;
    isSelected: (itemValue: T, value: T | T[] | undefined) => boolean;
};
