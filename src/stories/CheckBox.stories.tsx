import React, { useCallback, useState } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { CheckBox } from '../components/CheckBox'
import { DefaultTheme } from '../theme'
import { IconFace, IconName, IconSize } from '../components/Icon'

export default {
  title: 'CheckBox',
  component: CheckBox,
  argTypes: {},
} as Meta

const GlobalStyle = createGlobalStyle`
  .outer {
    padding: .5rem;
    background: cyan;
  }
  .box {
    width: 2rem;
    height: 2rem;
    background: darkseagreen;
  }
  .label {
    font-size: 1.2rem;
  }
`

export const Simple: Story = () => {
  const [checked, setChecked] = useState(true)

  const onChange = useCallback((value) => setChecked(value), [setChecked])

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <CheckBox value={checked} onChange={onChange} label="String label" />
      <br />
      <br />
      <CheckBox
        value={checked}
        onChange={onChange}
        label={
          <i>
            <b>Italic bold label (via ReactNode tags)</b>
          </i>
        }
      />
      <br />
      <br />
      <CheckBox
        value={checked}
        onChange={onChange}
        label="Customized mark icon"
        boxIcon={{
          name: IconName.Cross,
          face: IconFace.Danger,
          size: IconSize.S,
        }}
      />
      <br />
      <br />
      <CheckBox
        className="outer"
        boxClassName="box"
        labelClassName="label"
        value={checked}
        onChange={onChange}
        label="Customized with classes"
        boxIcon={{
          name: IconName.Cross,
          face: IconFace.Danger,
          size: IconSize.S,
        }}
      />
      <br />
      <br />
      <CheckBox
        style={{ padding: '.5rem', background: 'cyan' }}
        boxStyle={{ width: '2rem', height: '2rem', background: 'darkseagreen' }}
        labelStyle={{ fontSize: '1.2rem' }}
        value={checked}
        onChange={onChange}
        label="Customized with classes"
        boxIcon={{
          name: IconName.Cross,
          face: IconFace.Danger,
          size: IconSize.S,
        }}
      />
    </ThemeProvider>
  )
}

Simple.args = {}
