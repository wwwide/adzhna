import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import { ErrorBoundary, withErrorBoundary } from '../components/ErrorBoundary'
import { DefaultTheme } from '../theme'

export default {
  title: 'ErrorBoundary',
  component: ErrorBoundary,
  argTypes: {},
} as Meta

const SomeFailingComponent = () => {
  throw new Error('Unexpected error')
}

const WrappedProductionFailingComponent = withErrorBoundary(SomeFailingComponent, {
  errorLabel: 'Details',
  title: 'We have a problem',
})

export const ProductionMode: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <ErrorBoundary>
        <SomeFailingComponent />
      </ErrorBoundary>
    </ThemeProvider>
  )
}

ProductionMode.args = {}

export const ProductionModeWithHook: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <WrappedProductionFailingComponent />
    </ThemeProvider>
  )
}

ProductionModeWithHook.args = {}
