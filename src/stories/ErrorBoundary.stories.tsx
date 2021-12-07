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

const WrappedDebugFailingComponent = withErrorBoundary(SomeFailingComponent, true)

const WrappedProductionFailingComponent = withErrorBoundary(SomeFailingComponent)

export const DebugMode: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <ErrorBoundary debug>
        <SomeFailingComponent />
      </ErrorBoundary>
    </ThemeProvider>
  )
}

DebugMode.args = {}

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

export const DebugModeWithHook: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <WrappedDebugFailingComponent />
    </ThemeProvider>
  )
}

DebugModeWithHook.args = {}

export const ProductionModeWithHook: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <WrappedProductionFailingComponent />
    </ThemeProvider>
  )
}

ProductionModeWithHook.args = {}
