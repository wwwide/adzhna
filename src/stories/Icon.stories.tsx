import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import { Icon, IconFace, IconSize } from '../components/Icon'
import { DefaultTheme } from '../theme'

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {},
} as Meta

export const Faces: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Icon name="delete-circle" face={IconFace.Primary} />{' '}
      <Icon name="delete-circle" face={IconFace.Secondary} />{' '}
      <Icon name="delete-circle" face={IconFace.Success} />{' '}
      <Icon name="delete-circle" face={IconFace.Warning} />{' '}
      <Icon name="delete-circle" face={IconFace.Danger} />{' '}
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
