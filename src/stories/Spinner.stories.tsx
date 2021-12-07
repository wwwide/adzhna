import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import { Spinner } from '../components/Spinner'
import { DefaultTheme } from '../theme'

export default {
  title: 'Spinner',
  component: Spinner,
  argTypes: {},
} as Meta

export const Default: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <div style={{ height: '200px', position: 'relative' }}>
        Just then another visitor entered the drawing room: Prince Andrew Bolkónski, the little princess’ husband. He
        was a very handsome young man, of medium height, with firm, clearcut features.
        {/*<Spinner />*/}
      </div>
    </ThemeProvider>
  )
}
