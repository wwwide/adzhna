import { InputKind } from './InputKind';
export declare const getInputByKind: (kind?: InputKind | undefined) => import("react").FC<import("./kinds/MaskedInput").MaskedInputProps> | import("react").FC<import("./kinds/PhoneInput").PhoneInputProps> | import("react").FC<import("./kinds/FileInput").FileInputProps> | import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<import("./kinds/CommonInput").CommonInputProps & import("react").RefAttributes<HTMLInputElement>>>;
