import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import { Card } from '../components/Card'
import { DefaultTheme } from '../theme'

export default {
  title: 'Card',
  component: Card,
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
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Card>{content}</Card>
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
      <Card
        maxWidth="400px"
        header={{ title: '"War and peace" is a roman written by the great russian writer Lev Tolstoy' }}
      >
        {content}
      </Card>
    </ThemeProvider>
  )
}

WithTitle.args = {}

export const WithTitleAndActions: Story = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Card header={{ title: 'War and peace' }}>{content}</Card>
    </ThemeProvider>
  )
}

WithTitle.args = {}
