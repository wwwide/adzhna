import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import { Icon } from '../components/Icon'
import { DefaultTheme } from '../theme'

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {},
} as Meta

export const Faces: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Icon name="delete-circle" face="primary" />
      <Icon name="delete-circle" face="secondary" />
      <Icon name="delete-circle" face="success" />
      <Icon name="delete-circle" face="warning" />
      <Icon name="delete-circle" face="danger" />
      <Icon name="delete-circle" color="red" fill="magenta" />
    </ThemeProvider>
  )
}

Faces.args = {}

export const Sizes: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Icon name="delete-circle" size="XS" />
      <Icon name="delete-circle" size="S" />
      <Icon name="delete-circle" size="M" />
      <Icon name="delete-circle" size="L" />
      <Icon name="delete-circle" size="XL" />
      <Icon name="delete-circle" size="150px" />
    </ThemeProvider>
  )
}

Faces.args = {}

export const Set: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Icon name="arrow-down" />
      <Icon name="bars" />
      <Icon name="calendar" />
      <Icon name="chat" />
      <Icon name="check" />
      <Icon name="client" />
      <Icon name="comment" />
      <Icon name="copy" />
      <Icon name="cross" />
      <Icon name="delete-circle" />
      <Icon name="download" />
      <Icon name="left-arrow" />
      <Icon name="left-double-arrow" />
      <Icon name="person" />
      <Icon name="phone" />
      <Icon name="right-arrow" />
      <Icon name="right-double-arrow" />
      <Icon name="ruble" />
      <Icon name="settings" />
      <Icon name="star" />
      <Icon name="status" />
      <Icon name="url" />
    </ThemeProvider>
  )
}

Set.args = {}
