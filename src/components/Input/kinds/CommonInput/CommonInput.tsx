import React, { ChangeEvent, forwardRef, memo, useCallback, useRef } from 'react'
import { CommonInputProps } from './CommonInputProps'
import { Wrapper } from '../../Wrapper'
import { BaseInput, BaseTextArea } from './styles'
import { StyledComponent } from 'styled-components'

export const CommonInput = memo(
  forwardRef<HTMLInputElement, CommonInputProps>((props, ref) => {
    const {
      disabled,
      readOnly,
      onChange,
      validator,
      className,
      icon,
      multiline,
      copyButton,
      inputClassName,
      inputStyle,
      style,
      value,
      showClearButton = true,
      ...rest
    } = props

    const ownRef = useRef<HTMLInputElement>(null)

    const onChangeWrapper = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          const value = event.target.value
          const error = validator ? validator(value) : undefined
          onChange(value, error, event.target.files)
        }
      },
      [onChange, validator],
    )

    const onCopy = useCallback(async () => {
      if (window.navigator?.clipboard) {
        await window.navigator.clipboard.writeText((value || '').toString())
      }
    }, [value])

    const onClear = useCallback(() => {
      if (onChange) {
        const error = validator ? validator('') : undefined
        onChange('', error)
      }
      const reference: any = ref || ownRef
      if (reference) {
        reference.current.focus()
      }
    }, [onChange, validator, ref])

    const Component: StyledComponent<any, any> = multiline ? BaseTextArea : BaseInput

    return (
      <Wrapper
        className={className}
        icon={icon}
        style={style}
        copyButton={copyButton}
        onCopy={onCopy}
        onClear={onClear}
        showClearButton={showClearButton && !!value && !disabled && !readOnly}
      >
        <Component
          {...rest}
          $disabled={disabled}
          $hasIcon={!!icon}
          $hasCopyIcon={!!copyButton}
          $hasClearIcon={showClearButton && !!value}
          disabled={disabled}
          ref={ref || ownRef}
          onChange={onChangeWrapper}
          className={inputClassName}
          style={inputStyle}
          value={value}
          readOnly={readOnly}
        />
      </Wrapper>
    )
  }),
)
