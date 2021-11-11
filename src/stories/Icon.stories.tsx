import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import { Icon, IconSize } from '../components/Icon'
import { DefaultTheme } from '../theme'

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {},
} as Meta

export const Faces: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Icon name="delete-circle" face="primary" />{' '}
      <Icon name="delete-circle" face="secondary" />{' '}
      <Icon name="delete-circle" face="success" />{' '}
      <Icon name="delete-circle" face="warning" />{' '}
      <Icon name="delete-circle" face="danger" />{' '}
      <Icon name="delete-circle" color="red" fill="magenta" />{' '}
    </ThemeProvider>
  )
}

Faces.args = {}

export const Sizes: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Icon name="delete-circle" size={IconSize.XS} />{' '}
      <Icon name="delete-circle" size={IconSize.S} />{' '}
      <Icon name="delete-circle" size={IconSize.M} />{' '}
      <Icon name="delete-circle" size={IconSize.L} />{' '}
      <Icon name="delete-circle" size={IconSize.XL} />{' '}
      <Icon name="delete-circle" size="150px" />{' '}
    </ThemeProvider>
  )
}

Faces.args = {}

export const Set: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Icon name="delete-circle" />{' '}
    </ThemeProvider>
  )
}

Set.args = {}
