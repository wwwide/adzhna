import React from 'react';
import { ErrorBoundaryProps } from './ErrorBoundaryProps';
export declare const withErrorBoundary: <T>(Component: React.ComponentType<T>, opts?: ErrorBoundaryProps | undefined) => (props: T) => JSX.Element;
