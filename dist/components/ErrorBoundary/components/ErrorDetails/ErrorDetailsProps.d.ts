import { ErrorInfo, ReactNode } from 'react';
export interface ErrorDetailsProps {
    data?: {
        error: Error;
        info?: ErrorInfo;
    };
    title?: ReactNode;
    errorLabel?: ReactNode;
}
