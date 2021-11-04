import { InputProps } from "../../InputProps";
export interface SingleLineInputProps extends Omit<InputProps, 'kind' | 'onChange'> {
    onChange?: (value: string, error?: string) => void;
}
