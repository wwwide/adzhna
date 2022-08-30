import { IconProps } from '../../../Icon';
import { CSSProperties, ReactNode } from 'react';
export interface SearchFieldProps {
    onDropDownOpen: () => void;
    onTermChange: (term: string) => void;
    dropDownVisible: boolean;
    icon?: IconProps;
    valueOption?: {
        label: ReactNode;
        value: any;
        searchLabel?: string;
    };
    className?: string;
    style?: CSSProperties | undefined;
    searchTerm?: string;
    isLoading?: boolean;
    disabled?: boolean;
    placeholder?: string;
    preventScrollOnFocus?: boolean;
}
