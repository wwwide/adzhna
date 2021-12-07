import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import { Button } from '../components/Button'
import { Toast, ToastContainer, ToastGlobalStyle } from '../components/Toast'
import { DefaultTheme } from '../theme'

export default {
  title: 'Toast',
  component: Button,
  argTypes: {},
} as Meta

const message = `
  Just then another visitor entered the drawing room: Prince Andrew Bolkónski, 
  the little princess’ husband. He was a very handsome young man, of medium height, 
  with firm, clearcut features.
`

export const Default: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <ToastContainer />
      <ToastGlobalStyle />
      <Button face="light" onClick={() => Toast.default('Default', message)}>
        Show default toast
      </Button>
      <br />
      <Button face="light" onClick={() => Toast.defaultSmall('Small Default')}>
        Show small default toast
      </Button>
      <br />
      <Button face="success" onClick={() => Toast.success('Success', message)}>
        Show success toast
      </Button>
      <br />
      <Button face="success" onClick={() => Toast.successSmall('Small Success')}>
        Show small success toast
      </Button>
      <br />
      <Button face="danger" onClick={() => Toast.error('Error', message)}>
        Show error toast
      </Button>
      <br />
      <Button face="danger" onClick={() => Toast.errorSmall('Small Error')}>
        Show small error toast
      </Button>
      <br />
      <Button face="primary" onClick={() => Toast.info('Info', message)}>
        Show info toast
      </Button>
      <br />
      <Button face="primary" onClick={() => Toast.infoSmall('Small Info')}>
        Show small info toast
      </Button>
    </ThemeProvider>
  )
}

Default.args = {}
