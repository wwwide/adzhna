import React, { CSSProperties, ReactNode, useCallback, useState } from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { createGlobalStyle, css, ThemeProvider } from 'styled-components'
import { DarkTheme, DefaultTheme } from '../theme'
import { Select } from '../components/Select'
import { Dialog } from '../components/Dialog'
import { Button } from '../components/Button'

export default {
  title: 'Select',
  component: Select,
  argTypes: {},
} as Meta

export const Simple: Story = () => {
  const [value, setValue] = useState('9')

  return (
    <ThemeProvider theme={DarkTheme}>
      <div style={{ height: '300px' }} />
      <div style={{ width: '400px' }}>
        <Select
          dataSource={[
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            {
              label:
                'The very long label, which should be collapsed to trailing dots, also, what can you tell about weather?',
              value: '3',
            },
            { label: '4', value: '4' },
            { label: '5', value: '5' },
            { label: '6', value: '6' },
            { label: <i>Italic text</i>, value: '7' },
            { label: '8', value: '8' },
            { label: '9', value: '9' },
            { label: '10', value: '10' },
            { label: '11', value: '11' },
            { label: <div style={{ color: 'red' }}>12</div>, value: '12' },
            { label: '13', value: '13' },
            { label: '14', value: '14' },
            { label: '15', value: '15' },
            { label: '16', value: '16' },
            {
              label: (
                <img
                  style={{ width: '100%' }}
                  src="https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGltZXJ8ZW58MHx8MHx8&w=1000&q=80"
                />
              ),
              value: '17',
            },
            { label: '18', value: '18' },
            { label: '19', value: '19' },
            { label: '20', value: '20' },
          ]}
          value={value}
          onChange={setValue}
        />
      </div>
      <div style={{ height: '3000px' }} />
    </ThemeProvider>
  )
}

Simple.args = {}

const GlobalStyle = createGlobalStyle`${css`
  .input-class {
    color: red;
    font-weight: bold;
  }

  .drop-class {
    border: 10px solid;
  }

  .option-class {
    font-size: 30px;
  }
`}`

export const InputCustomClass: Story = () => {
  const [value, setValue] = useState('1')

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <b>Text becomes red:</b>
      <div style={{ width: '400px' }}>
        <Select
          dataSource={[
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
            { label: '5', value: '5' },
          ]}
          value={value}
          onChange={setValue}
          inputClassName="input-class"
        />
      </div>
    </ThemeProvider>
  )
}

InputCustomClass.args = {}

export const InputCustomStyle: Story = () => {
  const [value, setValue] = useState('1')

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <b>Text becomes green bold italic:</b>
      <div style={{ width: '400px' }}>
        <Select
          dataSource={[
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
            { label: '5', value: '5' },
          ]}
          value={value}
          onChange={setValue}
          inputStyle={{
            color: 'green',
            fontWeight: 'bold',
            fontStyle: 'italic',
          }}
        />
      </div>
    </ThemeProvider>
  )
}

InputCustomStyle.args = {}

export const DropDownCustomClass: Story = () => {
  const [value, setValue] = useState('1')

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <b>Bold drop down border:</b>
      <div style={{ width: '400px' }}>
        <Select
          dataSource={[
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
            { label: '5', value: '5' },
          ]}
          value={value}
          onChange={setValue}
          dropDownClassName="drop-class"
        />
      </div>
    </ThemeProvider>
  )
}

InputCustomClass.args = {}

export const DropDownCustomStyle: Story = () => {
  const [value, setValue] = useState('1')

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <b>Drop down rotation:</b>
      <div style={{ width: '400px' }}>
        <Select
          dataSource={[
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
            { label: '5', value: '5' },
          ]}
          value={value}
          onChange={setValue}
          dropDownStyle={{
            transform: 'rotate(180deg)',
          }}
        />
      </div>
    </ThemeProvider>
  )
}

DropDownCustomStyle.args = {}

export const OptionsCustomClass: Story = () => {
  const [value, setValue] = useState('1')

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <b>Big font in option items:</b>
      <div style={{ width: '400px' }}>
        <Select
          dataSource={[
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
            { label: '5', value: '5' },
          ]}
          value={value}
          onChange={setValue}
          optionClassName="option-class"
        />
      </div>
    </ThemeProvider>
  )
}

OptionsCustomClass.args = {}

export const OptionsCustomStyle: Story = () => {
  const [value, setValue] = useState('1')

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <b>Increased letter spacing in options items:</b>
      <div style={{ width: '400px' }}>
        <Select
          dataSource={[
            { label: 'First', value: '1' },
            { label: 'Second', value: '2' },
            { label: 'Third', value: '3' },
            { label: 'Fourth', value: '4' },
            { label: 'Fifth', value: '5' },
          ]}
          value={value}
          onChange={setValue}
          optionStyle={{
            letterSpacing: '3px',
          }}
        />
      </div>
    </ThemeProvider>
  )
}

OptionsCustomStyle.args = {}

export const WithIcon: Story = () => {
  const [value, setValue] = useState('1')

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <div style={{ width: '400px' }}>
        <Select
          dataSource={[
            { label: 'First', value: '1' },
            { label: 'Second', value: '2' },
            { label: 'Third', value: '3' },
            { label: 'Fourth', value: '4' },
            { label: 'Fifth', value: '5' },
          ]}
          value={value}
          onChange={setValue}
          icon={{
            name: 'bars',
            face: 'danger',
          }}
        />
      </div>
    </ThemeProvider>
  )
}

WithIcon.args = {}

export const CustomOptionRenderer: Story = () => {
  const [value, setValue] = useState('1')

  const renderer = useCallback(
    (
      label: ReactNode,
      value: any,
      onSelect: (value: any) => void,
      active?: boolean,
      highlighted?: boolean,
      className?: string,
      style?: CSSProperties | undefined,
    ) => {
      return (
        <div
          className={className}
          style={{
            ...style,
            cursor: 'pointer',
            fontWeight: active ? 'bold' : 'normal',
            background: highlighted ? '#aaa' : 'transparent',
          }}
          onClick={() => onSelect(value)}
        >
          {label}
        </div>
      )
    },
    [],
  )

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <div style={{ width: '400px' }}>
        <Select
          dataSource={[
            { label: 'First', value: '1' },
            { label: 'Second', value: '2' },
            { label: 'Third', value: '3' },
            { label: 'Fourth', value: '4' },
            { label: 'Fifth', value: '5' },
          ]}
          value={value}
          onChange={setValue}
          optionRenderer={renderer}
        />
      </div>
    </ThemeProvider>
  )
}

CustomOptionRenderer.args = {}

export const InvalidDataSourceInSearchMode: Story = () => {
  const [value, setValue] = useState('1')

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <div style={{ width: '400px' }}>
        <Select
          onSearch={() => true}
          dataSource={[
            { label: <b>First</b>, value: '1' },
            { label: 'Second', value: '2' },
            { label: 'Third', value: '3' },
            { label: 'Fourth', value: '4' },
            { label: 'Fifth', value: '5' },
          ]}
          value={value}
          onChange={setValue}
        />
      </div>
    </ThemeProvider>
  )
}

InvalidDataSourceInSearchMode.args = {}

const dataSource: { label: ReactNode; value: any; searchLabel?: string }[] = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  {
    label: 'The very long label, which should be collapsed to trailing dots, also, what can you tell about weather?',
    value: '3',
  },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: <i>Italic text</i>, value: '7', searchLabel: 'Italic' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '10', value: '10' },
  { label: '11', value: '11' },
  {
    label: (
      <div style={{ color: 'red' }}>
        <ul>
          <li>Monday</li>
          <li>Tuesday</li>
        </ul>
      </div>
    ),
    value: '12',
    searchLabel: 'Week days',
  },
  { label: '13', value: '13' },
  { label: '14', value: '14' },
  { label: '15', value: '15' },
  { label: '16', value: '16' },
  {
    label: (
      <img
        style={{ width: '100%' }}
        src="https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGltZXJ8ZW58MHx8MHx8&w=1000&q=80"
      />
    ),
    value: '17',
    searchLabel: 'Cool photo',
  },
  { label: '18', value: '18' },
  { label: '19', value: '19' },
  { label: '20', value: '20' },
]

export const SearchMode: Story = () => {
  const [value, setValue] = useState('1')
  const [term, setTerm] = useState('')

  const filtered = dataSource.filter(({ label, searchLabel }) => {
    return (
      (typeof label === 'string' && label.toLowerCase().indexOf(term.toLowerCase()) !== -1) ||
      (!!searchLabel && searchLabel.toLowerCase().indexOf(term.toLowerCase()) !== -1)
    )
  })

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <div style={{ width: '400px' }}>
        <Select
          onSearch={(term: string) => setTerm(term)}
          dataSource={filtered}
          value={value}
          onChange={setValue}
          icon={{
            name: 'star',
          }}
        />
      </div>
    </ThemeProvider>
  )
}

SearchMode.args = {}

export const SearchModeWithTerm: Story = () => {
  const [value, setValue] = useState('2')
  const [term, setTerm] = useState('2')

  const onChangeWrapper = useCallback(
    (value: any) => {
      const item = dataSource.find((i) => i.value === value)
      if (item) {
        setValue(value)
        setTerm(typeof item.label === 'string' ? item.label : item.searchLabel || '')
      }
    },
    [dataSource, setValue],
  )

  const filtered = dataSource.filter(({ label, searchLabel }) => {
    return (
      (typeof label === 'string' && label.toLowerCase().indexOf(term.toLowerCase()) !== -1) ||
      (!!searchLabel && searchLabel.toLowerCase().indexOf(term.toLowerCase()) !== -1)
    )
  })

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <div style={{ width: '400px' }}>
        <Select
          onSearch={(term: string) => setTerm(term)}
          dataSource={filtered}
          value={value}
          onChange={onChangeWrapper}
          icon={{
            name: 'star',
          }}
          searchTerm={term}
        />
      </div>
    </ThemeProvider>
  )
}

SearchModeWithTerm.args = {}

export const UsageInDialog: Story = () => {
  const [value1, setValue1] = useState('1')
  const [value2, setValue2] = useState('2')

  return (
    <ThemeProvider theme={DefaultTheme}>
      <Dialog open id="dialog1" onClose={() => true} header={{ title: 'Usage in dialog' }}>
        <div style={{ width: '400px', marginBottom: '30px' }}>
          <Select dataSource={dataSource} value={value1} onChange={setValue1} />
        </div>
        <div style={{ width: '400px' }}>
          <Select dataSource={dataSource} value={value2} onChange={setValue2} />
        </div>
      </Dialog>
    </ThemeProvider>
  )
}

UsageInDialog.args = {}

export const WithLoader: Story = () => {
  const [value, setValue] = useState('1')
  const [loading, setLoading] = useState(false)

  return (
    <ThemeProvider theme={DefaultTheme}>
      <div style={{ width: '400px', marginBottom: '30px' }}>
        <Select isLoading={loading} dataSource={dataSource} value={value} onChange={setValue} />
      </div>
      <div style={{ width: '400px', marginBottom: '30px' }}>
        <Select isLoading={loading} dataSource={dataSource} value={value} onChange={setValue} onSearch={() => true} />
      </div>
      <Button onClick={() => setLoading(!loading)}>Switch loading state</Button>
    </ThemeProvider>
  )
}

UsageInDialog.args = {}

// const FormField = (props: any) => {
//   const { label, children, required, error, name, ...rest } = props
//
//   return (
//     <div {...rest} style={{ marginBottom: '30px' }}>
//       {!!label && (
//         <label>
//           {label} {required && <span>*</span>}
//         </label>
//       )}
//       {children}
//     </div>
//   )
// }
//
// export const WithBriefForm: Story = () => {
//   const { formValue, formErrors, registeredFields, onChange, validate } = useFormData<any, any>({ a: 1, b: 2 }, {})
//
//   const ComponentsDictionary = {
//     input: Input,
//     select: Select,
//   }
//
//   return (
//     <ThemeProvider theme={DefaultTheme}>
//       <BriefForm
//         value={formValue}
//         errors={formErrors}
//         onChange={onChange}
//         registeredFields={registeredFields}
//         components={ComponentsDictionary as any}
//         field={FormField}
//       >
//         <Field
//           required
//           name="a"
//           label="A"
//           type="input"
//           inputProps={{
//             autoFocus: true,
//           }}
//         />
//         <Field
//           required
//           name="b"
//           label="B"
//           type="select"
//           inputProps={{
//             dataSource: [
//               { label: 1, value: 1 },
//               { label: 2, value: 2 },
//               { label: 3, value: 3 },
//             ],
//           }}
//         />
//       </BriefForm>
//     </ThemeProvider>
//   )
// }
//
// WithBriefForm.args = {}
