import React from 'react'
import { ErrorBoundaryProps } from './ErrorBoundaryProps'
import { ErrorDetails } from './components/ErrorDetails'

interface State {
  error?: Error
  info?: React.ErrorInfo
}

export class ErrorBoundary extends React.PureComponent<ErrorBoundaryProps> {
  state: State = {
    error: undefined,
    info: undefined,
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({ error, info })
  }

  render() {
    const { children, debug, title, errorLabel } = this.props
    const { error, info } = this.state

    if (error) {
      if (debug) {
        return <ErrorDetails data={{ error, info }} title={title} errorLabel={errorLabel} />
      }

      return <ErrorDetails data={{ error }} title={title} errorLabel={errorLabel} />
    }

    return children
  }
}
