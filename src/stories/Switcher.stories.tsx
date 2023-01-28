import React, { useCallback, useState } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Switcher } from '../components/Switcher'
import { DarkTheme } from '../theme'

export default {
  title: 'Switcher',
  component: Switcher,
  argTypes: {},
} as Meta

export const Basic: Story = () => {
  const [value, setValue] = useState<number | number[]>(1)
  const onChange = useCallback((value: number | number[]) => setValue(value), [setValue])

  return (
    <ThemeProvider theme={DarkTheme}>
      <div style={{ width: '400px' }}>
        <Switcher
          items={[
            { label: 'One', value: 1 },
            { label: 'Two', value: 2 },
            { label: 'Three', value: 3 },
          ]}
          value={value}
          onChange={onChange}
        />
      </div>
    </ThemeProvider>
  )
}

Basic.args = {}

export const Vertical: Story = () => {
  const [value, setValue] = useState<number | number[]>(1)
  const onChange = useCallback((value: number | number[]) => setValue(value), [setValue])

  return (
    <ThemeProvider theme={DarkTheme}>
      <div style={{ width: '200px' }}>
        <Switcher
          direction="vertical"
          items={[
            { label: 'One', value: 1 },
            { label: 'Two', value: 2 },
            { label: 'Three', value: 3 },
          ]}
          value={value}
          onChange={onChange}
        />
      </div>
    </ThemeProvider>
  )
}

Vertical.args = {}

export const Faces: Story = () => {
  const [value, setValue] = useState<number | number[]>(1)
  const onChange = useCallback((value: number | number[]) => setValue(value), [setValue])

  const items = [
    { label: 'One', value: 1 },
    { label: 'Two', value: 2 },
    { label: 'Three', value: 3 },
  ]

  return (
    <ThemeProvider theme={DarkTheme}>
      <div style={{ width: '400px' }}>
        <Switcher face="success" items={items} value={value} onChange={onChange} />
        <Switcher face="danger" items={items} value={value} onChange={onChange} />
      </div>
    </ThemeProvider>
  )
}

Faces.args = {}

export const MultiSelect: Story = () => {
  const [value, setValue] = useState<number | number[]>([1, 3])
  const onChange = useCallback((value: number | number[]) => setValue(value), [setValue])

  const items = [
    { label: 'One', value: 1 },
    { label: 'Two', value: 2 },
    { label: 'Three', value: 3 },
  ]

  return (
    <ThemeProvider theme={DarkTheme}>
      <div style={{ width: '400px' }}>
        <Switcher multiselect face="danger" items={items} value={value} onChange={onChange} />
      </div>
    </ThemeProvider>
  )
}

MultiSelect.args = {}

const GlobalStyle = createGlobalStyle`
  .bordered {
    border: 5px solid green;
  }
  .italic {
    font-style: italic;
  }
  .active {
    font-weight: bold;
    text-decoration: underline;
  }
`

export const CustomClasses: Story = () => {
  const [value, setValue] = useState<number | number[]>(1)
  const onChange = useCallback((value: number | number[]) => setValue(value), [setValue])

  const items = [
    { label: 'One', value: 1 },
    { label: 'Two', value: 2 },
    { label: 'Three', value: 3 },
  ]

  return (
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyle />
      <div style={{ width: '400px' }}>
        <Switcher
          className="bordered"
          itemClassName="italic"
          activeItemClassName="active"
          face="danger"
          items={items}
          value={value}
          onChange={onChange}
        />
      </div>
    </ThemeProvider>
  )
}

CustomClasses.args = {}

export const CustomStyles: Story = () => {
  const [value, setValue] = useState<number | number[]>(1)
  const onChange = useCallback((value: number | number[]) => setValue(value), [setValue])

  const items = [
    { label: 'One', value: 1 },
    { label: 'Two', value: 2 },
    { label: 'Three', value: 3 },
  ]

  return (
    <ThemeProvider theme={DarkTheme}>
      <div style={{ width: '400px' }}>
        <Switcher
          style={{ border: '5px dashed cyan' }}
          itemStyle={{ fontStyle: 'revert' }}
          activeItemStyle={{ fontWeight: 'bold' }}
          face="success"
          items={items}
          value={value}
          onChange={onChange}
        />
      </div>
    </ThemeProvider>
  )
}

CustomClasses.args = {}
