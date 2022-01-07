import React, { FC, memo, useCallback } from 'react'
import { FileInputProps } from './FileInputProps'
import { CommonInput } from '../CommonInput'

export const FileInput: FC<FileInputProps> = memo((props) => {
  const {
    onChange,
    // We don't want to pass value to file input, that's why we remove it from
    // rest array scope.
    // eslint-disable-next-line
    value,
    ...rest
  } = props

  const onChangeWrapper = useCallback(
    (value: any, error?: string, files?: FileList | null) => {
      onChange(files || null, error)
    },
    [onChange],
  )

  return <CommonInput {...rest} type="file" onChange={onChangeWrapper} />
})
