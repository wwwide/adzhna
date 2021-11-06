import React, { FC, memo } from 'react'
import { IconFace, IconName, IconSize } from '../../Icon'
import { WrapperProps } from './WrapperProps'
import { Box, ClearIcon, CopyIcon, WrappedIcon } from './styles'

export const Wrapper: FC<WrapperProps> = memo((props) => {
  const { children, icon, copyButton, onCopy, onClear, showClearButton, ...rest } = props

  return (
    <Box {...rest}>
      {icon && <WrappedIcon {...{ ...icon, size: IconSize.M }} />}
      {children}
      {copyButton?.show && (
        <CopyIcon face={IconFace.Primary} name={IconName.Copy} title={copyButton.title || 'Copy'} onClick={onCopy} />
      )}
      {showClearButton && (
        <ClearIcon $showCopyIcon={copyButton?.show} name={IconName.Cross} face={IconFace.Primary} onClick={onClear} />
      )}
    </Box>
  )
})
