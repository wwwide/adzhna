import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import SC, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Button, ButtonFace } from '../components/Button'
import { DefaultTheme } from '../theme'
import { IconFace, IconName, IconPosition, IconSize } from '../components/Icon'

export default {
  title: 'Button',
  component: Button,
  argTypes: {},
} as Meta

export const Normal: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button face={ButtonFace.Light}>Light</Button> <Button face={ButtonFace.Primary}>Primary</Button>{' '}
      <Button face={ButtonFace.Secondary}>Secondary</Button> <Button face={ButtonFace.Danger}>Danger</Button>{' '}
      <Button face={ButtonFace.Warning}>Warning</Button> <Button face={ButtonFace.Success}>Success</Button>{' '}
      <Button disabled>Disabled</Button>{' '}
      <Button disabled face={ButtonFace.Link}>
        Forgot password?
      </Button>
    </ThemeProvider>
  )
}

Normal.args = {}

export const Outlined: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button outlined face={ButtonFace.Primary}>
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
      </Button>{' '}
      <Button disabled outlined face={ButtonFace.Primary}>
        Disabled
      </Button>
    </ThemeProvider>
  )
}

Outlined.args = {}

export const WithIcon: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button face={ButtonFace.Primary} icon={{ name: IconName.DeleteCircle }}>
        Default left aligned icon
      </Button>{' '}
      <Button face={ButtonFace.Primary} icon={{ name: IconName.DeleteCircle, position: IconPosition.Right }}>
        Right aligned icon
      </Button>{' '}
      <Button face={ButtonFace.Warning} icon={{ name: IconName.DeleteCircle, face: IconFace.Danger }}>
        Warning button with danger faced icon
      </Button>{' '}
      <Button face={ButtonFace.Success} icon={{ name: IconName.DeleteCircle, size: IconSize.XL }}>
        Button with XL icon
      </Button>{' '}
      <Button face={ButtonFace.Danger} icon={{ name: IconName.DeleteCircle, color: 'yellow', fill: 'magenta' }}>
        Button with custom colored icon
      </Button>{' '}
      <Button outlined face={ButtonFace.Warning} icon={{ name: IconName.DeleteCircle }}>
        Outlined warning with icon
      </Button>{' '}
      <Button disabled face={ButtonFace.Warning} icon={{ name: IconName.DeleteCircle }}>
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
      <WrappedButton face={ButtonFace.Primary}>Button with italic font</WrappedButton>{' '}
      <Button face={ButtonFace.Success} className="rounded-button">
        Button with css class name applied
      </Button>{' '}
    </ThemeProvider>
  )
}

WithIcon.args = {}
