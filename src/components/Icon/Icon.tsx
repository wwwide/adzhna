import React, { FC, memo } from 'react'
import { IconProps } from './IconProps'
import { getIconFile } from './getIconFile'
import { Box, Content } from './styles'

export const Icon: FC<IconProps> = memo((props) => {
  const { color, face = 'secondary', fill, name, size = 'M', onClick, ...rest } = props
  const file = getIconFile(name)

  return (
    <Box {...rest} onClick={onClick}>
      <Content $color={color} $face={face} $fill={fill} $size={size} dangerouslySetInnerHTML={{ __html: file }} />
    </Box>
  )
})
