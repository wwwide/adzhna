import React, { useCallback, useState } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import { DarkTheme } from '../theme'
import { Autosuggest } from '../components/Autosuggest'

export default {
  title: 'Autosuggest',
  component: Autosuggest,
  argTypes: {},
} as Meta

export const Simple: Story = () => {
  const [value, setValue] = useState<{ id: string; name: string } | undefined>(undefined)
  const [term, setTerm] = useState('')
  const dataSupplier = useCallback((term: string) => Promise.resolve([{ id: '1', name: '2' }]), [])

  return (
    <ThemeProvider theme={DarkTheme}>
      <Autosuggest<{ id: string; name: string }, { id: string; name: string }>
        searchTerm={term}
        onSearch={setTerm}
        value={value}
        onChange={setValue}
        dataSupplier={dataSupplier}
        responseMapper={(value) => {
          return {
            value,
            label: <span>{value.name}</span>,
            searchLabel: value.name,
          }
        }}
      />
      <div style={{ height: '3000px' }} />
    </ThemeProvider>
  )
}

Simple.args = {}
