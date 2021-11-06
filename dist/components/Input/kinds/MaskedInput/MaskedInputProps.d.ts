import { CommonInputProps } from '../CommonInput';
export interface MaskedInputProps extends Omit<CommonInputProps, 'value' | 'kind' | 'onChange'> {
    value: string;
    mask?: (string | RegExp)[];
    onChange?: (value: string, error?: string) => void;
}
