import { MaskedInputProps } from '../MaskedInput';
export interface PhoneInputProps extends Omit<MaskedInputProps, 'kind' | 'mask'> {
    countryCodeMask: (string | RegExp)[];
}
