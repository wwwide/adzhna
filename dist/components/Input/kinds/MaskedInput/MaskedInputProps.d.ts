import { InputProps } from '../../InputProps';
export interface MaskedInputProps extends Omit<InputProps, 'value' | 'kind' | 'onChange'> {
    value: string;
    mask: (string | RegExp)[];
    onChange?: (value: string, error?: string) => void;
}
