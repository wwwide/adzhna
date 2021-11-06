import { CSSProperties } from 'react';
import { IconProps } from '../../Icon';
export interface WrapperProps {
    className?: string;
    icon?: IconProps;
    style?: CSSProperties | undefined;
    copyButton?: {
        show: boolean;
        title?: string;
    };
    onCopy: () => void;
    onClear: () => void;
    showClearButton: boolean;
}
