import { CSSProperties, InputHTMLAttributes } from 'react';
import { InputKind } from '../../InputKind';
import { IconProps } from '../../../Icon';
export interface CommonInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    kind?: InputKind;
    onChange?: (value: string, error?: string, files?: FileList | null) => void;
    validator?: (value: string) => string | undefined;
    inputClassName?: string;
    inputStyle?: CSSProperties | undefined;
    icon?: IconProps;
    copyButton?: {
        show: boolean;
        title?: string;
    };
    showClearButton?: boolean;
    multiline?: boolean;
}
