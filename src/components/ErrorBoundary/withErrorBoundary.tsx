import React from 'react'
import { ErrorBoundary } from './ErrorBoundary'
import { ErrorBoundaryProps } from './ErrorBoundaryProps'

export const withErrorBoundary =
  <T,>(Component: React.ComponentType<T>, opts?: ErrorBoundaryProps) =>
  (props: T) =>
    (
      <ErrorBoundary {...(opts || {})}>
        <Component {...(props as any)} />
      </ErrorBoundary>
    )
