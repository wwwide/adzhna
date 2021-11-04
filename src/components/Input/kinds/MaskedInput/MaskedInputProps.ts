import { InputProps } from "../../InputProps";

export interface MaskedInputProps extends Omit<InputProps, 'kind' | 'onChange'> {
  mask: (string | RegExp)[]
  onChange?: (value: string, error?: string) => void
}
