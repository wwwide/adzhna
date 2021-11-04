import React, { ChangeEvent, forwardRef, memo, useCallback } from 'react'
import { SingleLineInputProps } from './SingleLineInputProps'
import { Box } from './styles'

export const SingleLineInput = memo(
  forwardRef<HTMLInputElement, SingleLineInputProps>((props, ref) => {
    const { onChange, validator, ...rest } = props

    const onChangeWrapper = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          const value = event.target.value
          const error = validator ? validator(value) : undefined
          onChange(value, error)
        }
      },
      [onChange, validator],
    )

    return <Box ref={ref} onChange={onChangeWrapper} {...rest} />
  }),
)
