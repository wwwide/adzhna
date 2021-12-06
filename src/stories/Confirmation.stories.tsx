import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import { Button } from '../components/Button'
import { Confirmation, useConfirmation } from '../components/Confirmation'
import { DefaultTheme } from '../theme'

export default {
  title: 'Confirmation',
  component: Confirmation,
  argTypes: {},
} as Meta

export const Simple: Story = () => {
  const [open, setOpen] = useState(true)

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button face="primary" onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Confirmation
        id="simple"
        open={open}
        onCancel={() => setOpen(false)}
        onConfirm={() => setOpen(false)}
        title="Confirmation with title"
        face="primary"
        message={
          <div>
            <b>Bold</b> <i>statement</i>
          </div>
        }
      />
    </ThemeProvider>
  )
}

Simple.args = {}

export const WithHook: Story = () => {
  const { Confirmation, open } = useConfirmation({
    title: 'Confirmation with title',
    message: (
      <div>
        <b>Bold</b> <i>statement</i>
      </div>
    ),
    onConfirm: () => alert('Confirmed'),
    face: 'success',
    confirmationButton: {
      text: 'Confirm',
      face: 'success',
    },
  })

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button face="primary" onClick={open}>
        Open dialog
      </Button>
      <Confirmation />
    </ThemeProvider>
  )
}

WithHook.args = {}
