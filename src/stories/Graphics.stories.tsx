import React, { useCallback } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import { Camera } from '../components/Graphics'
import { DefaultTheme } from '../theme'

export default {
  title: 'Graphics',
  component: Camera,
  argTypes: {},
} as Meta

export const InlineCamera: Story = () => {
  const photoHandler = useCallback((photo: Blob | null) => {
    // eslint-disable-next-line
    console.log(photo)
  }, [])

  return <ThemeProvider theme={DefaultTheme}>{false && <Camera onTakePhoto={photoHandler} />}</ThemeProvider>
}

InlineCamera.args = {}
