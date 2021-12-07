import React from 'react';
import { ErrorBoundaryProps } from './ErrorBoundaryProps';
interface State {
    error?: Error;
    info?: React.ErrorInfo;
}
export declare class ErrorBoundary extends React.PureComponent<ErrorBoundaryProps> {
    state: State;
    componentDidCatch(error: Error, info: React.ErrorInfo): void;
    render(): React.ReactNode;
}
export {};
