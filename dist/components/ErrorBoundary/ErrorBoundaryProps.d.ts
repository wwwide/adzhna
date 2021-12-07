import { ReactNode } from 'react';
export interface ErrorBoundaryProps {
    debug?: boolean;
    title?: ReactNode;
    errorLabel?: ReactNode;
}
