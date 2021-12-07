import * as React from 'react';
import { Id, UpdateOptions } from 'react-toastify';
export declare const Toast: {
    dismiss: () => void;
    update: (toastId: Id, options: UpdateOptions) => void;
    success: (title: React.ReactNode, message?: React.ReactNode) => void;
    successSmall: (message: React.ReactNode) => void;
    error: (title: React.ReactNode, message?: React.ReactNode) => void;
    errorSmall: (message: React.ReactNode) => void;
    info: (title: React.ReactNode, message?: React.ReactNode) => void;
    infoSuccessSmall: (message: React.ReactNode) => void;
    infoSmall: (message: React.ReactNode) => void;
    default: (title: React.ReactNode, message?: React.ReactNode) => void;
    defaultSmall: (message: React.ReactNode) => void;
};
