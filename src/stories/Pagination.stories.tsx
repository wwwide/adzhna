import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Pagination } from '../components/Pagination'
import { DefaultTheme } from '../theme'
import { ButtonFace } from '../components/Button'

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: {},
} as Meta

export const NotVisible: Story = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Pagination page={1} size={10} total={items.length} onChange={() => ({})} />
    </ThemeProvider>
  )
}

NotVisible.args = {}

export const InMaxInlineRange: Story = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Pagination page={1} size={2} total={items.length} onChange={() => ({})} />
    </ThemeProvider>
  )
}

InMaxInlineRange.args = {}

export const FullMarkup: Story = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
  const [page, setPage] = useState(1)

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Pagination page={page} size={2} total={items.length} onChange={setPage} />
    </ThemeProvider>
  )
}

FullMarkup.args = {}

export const CustomButtonFace: Story = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
  const [page, setPage] = useState(1)

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Pagination
        pageButtonFace={ButtonFace.Secondary}
        activePageButtonFace={ButtonFace.Success}
        arrowPageButtonFace={ButtonFace.Light}
        page={page}
        size={2}
        total={items.length}
        onChange={setPage}
      />
    </ThemeProvider>
  )
}

CustomButtonFace.args = {}

const GlobalStyle = createGlobalStyle`
  .regular {
    font-style: italic;
  }
  .active {
    background: red;
  }
  .arrow {
    background: yellow;
  }
`

export const CustomClassName: Story = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
  const [page, setPage] = useState(1)

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Pagination
        pageButtonClassName="regular"
        activePageButtonClassName="active"
        arrowPageButtonClassName="arrow"
        page={page}
        size={2}
        total={items.length}
        onChange={setPage}
      />
    </ThemeProvider>
  )
}

CustomClassName.args = {}

export const CustomInlineStyles: Story = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
  const [page, setPage] = useState(1)

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Pagination
        pageButtonStyle={{ border: '1px solid #000', color: '#000' }}
        activePageButtonStyle={{ background: '#000' }}
        arrowPageButtonStyle={{ background: '#aaa' }}
        page={page}
        size={2}
        total={items.length}
        onChange={setPage}
      />
    </ThemeProvider>
  )
}

CustomInlineStyles.args = {}

export const Disabled: Story = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
  const [page, setPage] = useState(1)

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Pagination disabled page={page} size={2} total={items.length} onChange={setPage} />
    </ThemeProvider>
  )
}

Disabled.args = {}
