import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Button, ButtonFace } from '../components/Button'
import { Card } from '../components/Card'
import { DefaultTheme } from '../theme'
import { CardFace } from '../components/Card/CardFace'

export default {
  title: 'Card',
  component: Card,
  argTypes: {},
} as Meta

const title = '"War and peace" is a roman written by the great russian writer Lev Tolstoy'
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
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Card maxWidth="400px">{content}</Card>
    </ThemeProvider>
  )
}

Simple.args = {}

export const WithTitle: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Card maxWidth="400px" header={{ title: 'War and peace' }} style={{ marginBottom: '1rem' }}>
        {content}
      </Card>
      <br />
      <Card maxWidth="400px" header={{ title }}>
        {content}
      </Card>
    </ThemeProvider>
  )
}

WithTitle.args = {}

export const WithTitleAndActions: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Card
        maxWidth="400px"
        header={{
          actions: <Button face={ButtonFace.Success}>Read</Button>,
          title: 'War and peace',
        }}
      >
        {content}
      </Card>
      <br />
      <Card
        maxWidth="400px"
        header={{
          title,
          actions: <Button face={ButtonFace.Success}>Read</Button>,
        }}
      >
        {content}
      </Card>
    </ThemeProvider>
  )
}

WithTitleAndActions.args = {}

export const Faces: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Card
        face={CardFace.Default}
        maxWidth="400px"
        header={{
          actions: <Button face={ButtonFace.Success}>Read</Button>,
          title: 'War and peace',
        }}
      >
        {content}
      </Card>
      <br />
      <Card
        face={CardFace.Primary}
        maxWidth="400px"
        header={{
          actions: <Button face={ButtonFace.Success}>Read</Button>,
          title: 'War and peace',
        }}
      >
        {content}
      </Card>
      <br />
      <Card
        face={CardFace.Secondary}
        maxWidth="400px"
        header={{
          actions: <Button face={ButtonFace.Success}>Read</Button>,
          title: 'War and peace',
        }}
      >
        {content}
      </Card>
      <br />
      <Card
        face={CardFace.Success}
        maxWidth="400px"
        header={{
          actions: <Button face={ButtonFace.Primary}>Read</Button>,
          title: 'War and peace',
        }}
      >
        {content}
      </Card>
      <br />
      <Card
        face={CardFace.Warning}
        maxWidth="400px"
        header={{
          actions: <Button face={ButtonFace.Primary}>Read</Button>,
          title: 'War and peace',
        }}
      >
        {content}
      </Card>
      <br />
      <Card
        face={CardFace.Danger}
        maxWidth="400px"
        header={{
          actions: <Button face={ButtonFace.Light}>Read</Button>,
          title: 'War and peace',
        }}
      >
        {content}
      </Card>
    </ThemeProvider>
  )
}

Faces.args = {}

export const WithFooter: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Card
        maxWidth="400px"
        header={{
          actions: <Button face={ButtonFace.Success}>Read</Button>,
          title: 'War and peace',
        }}
        footer={
          <span>
            <b>Date</b>: 1863—1869, 1873
          </span>
        }
      >
        {content}
      </Card>
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

export const StyledWithClassnames: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Card
        contentClassName="content-class"
        footerClassName="footer-class"
        maxWidth="400px"
        header={{
          actions: <Button face={ButtonFace.Success}>Read</Button>,
          title: 'Underlined title',
          headerClassName: 'header-class',
          titleClassName: 'title-class',
        }}
        footer={<span>Italic font in footer</span>}
      >
        {content}
      </Card>
    </ThemeProvider>
  )
}

StyledWithClassnames.args = {}

export const StyledWithInlineStyles: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Card
        contentStyle={{ color: '#999' }}
        footerStyle={{ fontStyle: 'italic' }}
        maxWidth="400px"
        header={{
          actions: <Button face={ButtonFace.Success}>Read</Button>,
          title: 'Underlined title',
          headerStyle: { background: 'greenyellow' },
          titleStyle: { textDecoration: 'underline' },
        }}
        footer={<span>Italic font in footer</span>}
      >
        {content}
      </Card>
    </ThemeProvider>
  )
}

StyledWithInlineStyles.args = {}
