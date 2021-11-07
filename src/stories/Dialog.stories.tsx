import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Button, ButtonFace } from '../components/Button'
import { Dialog, DialogFace } from '../components/Dialog'
import { DefaultTheme } from '../theme'

export default {
  title: 'Dialog',
  component: Dialog,
  argTypes: {},
} as Meta

const content = (
  <div style={{ textAlign: 'justify' }}>
    Just then another visitor entered the drawing room: Prince Andrew Bolkónski, the little princess’ husband. He was a
    very handsome young man, of medium height, with firm, clearcut features. Everything about him, from his weary, bored
    expression to his quiet, measured step, offered a most striking contrast to his quiet, little wife. It was evident
    that he not only knew everyone in the drawing room, but had found them to be so tiresome that it wearied him to look
    at or listen to them. And among all these faces that he found so tedious, none seemed to bore him so much as that of
    his pretty wife. He turned away from her with a grimace that distorted his handsome face, kissed Anna Pávlovna’s
    hand, and screwing up his eyes scanned the whole company.
  </div>
)

export const Simple: Story = () => {
  const [open, setOpen] = useState(true)

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button face={ButtonFace.Primary} onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog id="simple" open={open} onClose={() => setOpen(false)} width="400px" header={{ title: 'Sample dialog' }}>
        Short dialog content.
      </Dialog>
    </ThemeProvider>
  )
}

Simple.args = {}

export const WithLongTitle: Story = () => {
  const [open, setOpen] = useState(true)

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button face={ButtonFace.Primary} onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog
        id="simple"
        open={open}
        onClose={() => setOpen(false)}
        width="400px"
        header={{
          title: 'Sample dialog with very long title',
        }}
      >
        {content}
      </Dialog>
    </ThemeProvider>
  )
}

WithLongTitle.args = {}

export const WithTitleAndActions: Story = () => {
  const [open, setOpen] = useState(true)

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button face={ButtonFace.Primary} onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog
        id="simple"
        open={open}
        onClose={() => setOpen(false)}
        width="800px"
        header={{ title: 'Sample dialog', actions: <Button face={ButtonFace.Success}>Read</Button> }}
      >
        {content}
      </Dialog>
    </ThemeProvider>
  )
}

WithTitleAndActions.args = {}

export const CustomFace: Story = () => {
  const [open, setOpen] = useState(true)

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button face={ButtonFace.Primary} onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog
        id="simple"
        open={open}
        onClose={() => setOpen(false)}
        width="400px"
        header={{
          title: 'Sample dialog',
          actions: <Button face={ButtonFace.Light}>Action</Button>,
        }}
        face={DialogFace.Primary}
      >
        {content}
      </Dialog>
    </ThemeProvider>
  )
}

CustomFace.args = {}

export const WithFooter: Story = () => {
  const [open, setOpen] = useState(true)

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button face={ButtonFace.Primary} onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog
        id="simple"
        open={open}
        onClose={() => setOpen(false)}
        width="400px"
        header={{ title: 'Sample dialog' }}
        face={DialogFace.Danger}
        footer={<i>Footer content</i>}
      >
        {content}
      </Dialog>
    </ThemeProvider>
  )
}

WithFooter.args = {}

const GlobalStyle = createGlobalStyle`
  .content-class {
    color: #999;
  }
  .footer-class {
    font-style: italic;
  }
  .header-class {
    background: greenyellow;
  }
  .title-class {
    text-decoration: underline;
  }
`

export const StyledWithClassNames: Story = () => {
  const [open, setOpen] = useState(true)

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Button face={ButtonFace.Primary} onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog
        contentClassName="content-class"
        footerClassName="footer-class"
        id="simple"
        open={open}
        onClose={() => setOpen(false)}
        width="400px"
        header={{
          actions: <Button face={ButtonFace.Success}>Read</Button>,
          title: 'Underlined title',
          headerClassName: 'header-class',
          titleClassName: 'title-class',
        }}
        footer={<span>Italic font in footer</span>}
      >
        {content}
      </Dialog>
    </ThemeProvider>
  )
}

StyledWithClassNames.args = {}

export const StyledWithInlineStyles: Story = () => {
  const [open, setOpen] = useState(true)

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Button face={ButtonFace.Primary} onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog
        contentStyle={{ color: '#999' }}
        footerStyle={{ fontStyle: 'italic' }}
        id="simple"
        face={DialogFace.Default}
        open={open}
        onClose={() => setOpen(false)}
        width="400px"
        header={{
          actions: <Button face={ButtonFace.Success}>Read</Button>,
          title: 'Underlined title',
          headerStyle: { background: 'greenyellow' },
          titleStyle: { textDecoration: 'underline' },
        }}
        footer={<span>Italic font in footer</span>}
      >
        {content}
      </Dialog>
    </ThemeProvider>
  )
}

StyledWithInlineStyles.args = {}
