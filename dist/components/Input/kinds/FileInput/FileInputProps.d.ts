import { CommonInputProps } from '../CommonInput';
export interface FileInputProps extends Omit<CommonInputProps, 'type' | 'onChange' | 'value'> {
    onChange: (value: FileList | null, error?: string) => void;
    value: FileList | null;
}
