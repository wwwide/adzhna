import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import SC, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Button } from '../components/Button'
import { DefaultTheme } from '../theme'
import { IconFace, IconSize } from '../components/Icon'

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as Meta

export const Normal: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button face="light">Light</Button> <Button face="primary">Primary</Button>{' '}
      <Button face="secondary">Secondary</Button> <Button face="danger">Danger</Button>{' '}
      <Button face="warning">Warning</Button> <Button face="success">Success</Button>{' '}
      <Button disabled>Disabled</Button> <Button face="link">Forgot password?</Button>
    </ThemeProvider>
  )
}

Normal.args = {}

export const Outlined: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button outlined face="primary">
        Primary
      </Button>{' '}
      <Button outlined face="secondary">
        Secondary
      </Button>{' '}
      <Button outlined face="danger">
        Danger
      </Button>{' '}
      <Button outlined face="warning">
        Warning
      </Button>{' '}
      <Button outlined face="success">
        Success
      </Button>{' '}
      <Button disabled outlined face="primary">
        Disabled
      </Button>
    </ThemeProvider>
  )
}

Outlined.args = {}

export const WithIcon: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button face="primary" icon={{ name: 'delete-circle' }}>
        Default left aligned icon
      </Button>{' '}
      <Button face="primary" icon={{ name: 'delete-circle', position: 'right' }}>
        Right aligned icon
      </Button>{' '}
      <Button face="warning" icon={{ name: 'delete-circle', face: IconFace.Danger }}>
        Warning button with danger faced icon
      </Button>{' '}
      <Button face="success" icon={{ name: 'delete-circle', size: IconSize.XL }}>
        Button with XL icon
      </Button>{' '}
      <Button face="danger" icon={{ name: 'delete-circle', color: 'yellow', fill: 'magenta' }}>
        Button with custom colored icon
      </Button>{' '}
      <Button outlined face="warning" icon={{ name: 'delete-circle' }}>
        Outlined warning with icon
      </Button>{' '}
      <Button disabled face="warning" icon={{ name: 'delete-circle' }}>
        Disabled with icon
      </Button>{' '}
    </ThemeProvider>
  )
}

WithIcon.args = {}

const WrappedButton = SC(Button)`
  font-style: italic;
`

const GlobalStyle = createGlobalStyle`
  .rounded-button {
    border-radius: 100px;
  }
`

export const CustomStyles: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <WrappedButton face="primary">Button with italic font</WrappedButton>{' '}
      <Button face="success" className="rounded-button">
        Button with css class name applied
      </Button>{' '}
    </ThemeProvider>
  )
}

WithIcon.args = {}
