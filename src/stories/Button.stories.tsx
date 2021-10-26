import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import { Button, ButtonFace } from '../components/Button'
import { DefaultTheme } from '../theme'

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as Meta

export const Normal: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button face={ButtonFace.Primary} tabIndex={0}>
        Primary
      </Button>{' '}
      <Button face={ButtonFace.Secondary}>Secondary</Button>{' '}
      <Button face={ButtonFace.Danger}>Danger</Button>{' '}
      <Button face={ButtonFace.Warning}>Warning</Button>{' '}
      <Button face={ButtonFace.Success}>Success</Button>{' '}
      <Button face={ButtonFace.Link}>Forgot password?</Button>
    </ThemeProvider>
  )
}

Normal.args = {}

export const Outlined: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button outlined face={ButtonFace.Primary} tabIndex={0}>
        Primary
      </Button>{' '}
      <Button outlined face={ButtonFace.Secondary}>
        Secondary
      </Button>{' '}
      <Button outlined face={ButtonFace.Danger}>
        Danger
      </Button>{' '}
      <Button outlined face={ButtonFace.Warning}>
        Warning
      </Button>{' '}
      <Button outlined face={ButtonFace.Success}>
        Success
      </Button>
    </ThemeProvider>
  )
}

Outlined.args = {}
