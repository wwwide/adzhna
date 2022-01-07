import React, { useCallback, useState } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import { Input, MaskedInput, PhoneInput, FileInput } from '../components/Input'
import { Button } from '../components/Button'
import { DefaultTheme } from '../theme'

export default {
  title: 'Input',
  component: Input,
  argTypes: {},
} as Meta

export const Simple: Story = () => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const onChange = useCallback(
    (value: string, error?: string) => {
      setValue(value)
      setError(error || '')
    },
    [setValue, setError],
  )

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Input
        autoFocus
        style={{ marginRight: '.5rem', width: '400px' }}
        value={value}
        validator={(value: string) => (value.toString().length < 3 ? 'Too short value' : undefined)}
        onChange={onChange}
        placeholder="Type at least 3 symbols"
      />
      <Button face={error ? 'danger' : 'success'}>Error: {error || 'no error'}</Button>
    </ThemeProvider>
  )
}

Simple.args = {}

export const File: Story = () => {
  const [value, setValue] = useState<FileList | null>(null)

  const onChange = useCallback(
    (value: FileList | null) => {
      setValue(value)
    },
    [setValue],
  )

  return (
    <ThemeProvider theme={DefaultTheme}>
      <FileInput autoFocus value={value} onChange={onChange} />
    </ThemeProvider>
  )
}

File.args = {}

export const WithIcon: Story = () => {
  const [value, setValue] = useState('')

  return (
    <ThemeProvider theme={DefaultTheme}>
      <div style={{ width: '400px' }}>
        <Input
          autoFocus
          icon={{ name: 'delete-circle' }}
          copyButton={{ show: true, title: 'Copy to clipboard' }}
          value={value}
          onChange={setValue}
          placeholder="Type here..."
          style={{ marginBottom: '1rem' }}
        />
        <PhoneInput
          countryCodeMask={['7']}
          copyButton={{ show: true, title: 'Copy to clipboard' }}
          icon={{ name: 'phone', face: 'primary' }}
          value={value}
          onChange={setValue}
        />
      </div>
    </ThemeProvider>
  )
}

WithIcon.args = {}

export const CustomMask: Story = () => {
  const [value, setValue] = useState('5601482034')

  return (
    <ThemeProvider theme={DefaultTheme}>
      <MaskedInput
        autoFocus
        mask={[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
        value={value}
        onChange={setValue}
      />
    </ThemeProvider>
  )
}

CustomMask.args = {}

export const PhoneNumberInput: Story = () => {
  const [value, setValue] = useState('79956018459')

  return (
    <ThemeProvider theme={DefaultTheme}>
      <PhoneInput autoFocus countryCodeMask={['7']} value={value} onChange={setValue} />
    </ThemeProvider>
  )
}

PhoneNumberInput.args = {}

export const MultiLine: Story = () => {
  const [value, setValue] = useState('')

  return (
    <ThemeProvider theme={DefaultTheme}>
      <div style={{ width: '400px' }}>
        <Input
          autoFocus
          multiline
          value={value}
          onChange={setValue}
          placeholder="Type here..."
          style={{ height: '200px' }}
        />
      </div>
    </ThemeProvider>
  )
}

MultiLine.args = {}
