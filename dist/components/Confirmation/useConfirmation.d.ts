import { ReactNode } from 'react';
import { ButtonFace } from '../Button';
import { DialogFace } from '../Dialog';
declare type Options = {
    message: string | ReactNode;
    onConfirm: () => any;
    confirmationButton?: {
        text: string | ReactNode;
        face?: ButtonFace;
    };
    face?: DialogFace;
    isConfirmationNegative?: boolean;
    dialogId?: string;
    title?: string | ReactNode;
};
export declare const useConfirmation: (opts: Options) => {
    Confirmation: () => JSX.Element;
    open: () => void;
};
export {};
