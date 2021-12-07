import React from 'react'
import { ErrorBoundary } from './ErrorBoundary'

export const withErrorBoundary =
  <T,>(Component: React.ComponentType<T>, debug?: boolean) =>
  (props: T) =>
    (
      <ErrorBoundary debug={debug}>
        <Component {...(props as any)} />
      </ErrorBoundary>
    )
