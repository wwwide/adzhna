import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import { CheckBox } from '../components/CheckBox'
import { DefaultTheme } from '../theme'

export default {
  title: 'CheckBox',
  component: CheckBox,
  argTypes: {},
} as Meta

export const Simple: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CheckBox />
    </ThemeProvider>
  )
}

Simple.args = {}
