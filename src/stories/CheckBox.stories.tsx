import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import { Icon, IconFace, IconName, IconSize } from '../components/Icon'
import { DefaultTheme } from '../theme'

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {},
} as Meta

export const Faces: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Icon name={IconName.DeleteCircle} face={IconFace.Primary} />{' '}
      <Icon name={IconName.DeleteCircle} face={IconFace.Secondary} />{' '}
      <Icon name={IconName.DeleteCircle} face={IconFace.Success} />{' '}
      <Icon name={IconName.DeleteCircle} face={IconFace.Warning} />{' '}
      <Icon name={IconName.DeleteCircle} face={IconFace.Danger} />{' '}
      <Icon name={IconName.DeleteCircle} color="red" fill="magenta" />{' '}
    </ThemeProvider>
  )
}

Faces.args = {}

export const Sizes: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Icon name={IconName.DeleteCircle} size={IconSize.XS} />{' '}
      <Icon name={IconName.DeleteCircle} size={IconSize.S} />{' '}
      <Icon name={IconName.DeleteCircle} size={IconSize.M} />{' '}
      <Icon name={IconName.DeleteCircle} size={IconSize.L} />{' '}
      <Icon name={IconName.DeleteCircle} size={IconSize.XL} />{' '}
      <Icon name={IconName.DeleteCircle} size="150px" />{' '}
    </ThemeProvider>
  )
}

Faces.args = {}

export const Set: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Icon name={IconName.DeleteCircle} />{' '}
    </ThemeProvider>
  )
}

Set.args = {}
