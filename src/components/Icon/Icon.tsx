import React, { FC, memo } from 'react'
import { IconProps } from './IconProps'
import { getIconFile } from './getIconFile'
import { IconSize } from './IconSize'
import { IconFace } from './IconFace'
import { Box, Content } from './styles'

export const Icon: FC<IconProps> = memo((props) => {
  const { color, face = IconFace.Secondary, fill, name, size = IconSize.M, onClick, ...rest } = props
  const file = getIconFile(name).default

  return (
    <Box {...rest} onClick={onClick}>
      <Content $color={color} $face={face} $fill={fill} $size={size} dangerouslySetInnerHTML={{ __html: file }} />
    </Box>
  )
})
