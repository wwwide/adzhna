import React, { FC, memo } from 'react'
import { CardProps } from './CardProps'
import { Actions, Box, Content, Header, Title } from './styles'

export const Card: FC<CardProps> = memo((props) => {
  const { children, header, maxWidth, ...rest } = props

  return (
    <Box $maxWidth={maxWidth} {...rest}>
      {!!(header?.title || header?.actions) && (
        <Header>
          {!!header.title && <Title>{header.title}</Title>}
          {!!header.actions && <Actions>{header.title}</Actions>}
        </Header>
      )}
      <Content>{children}</Content>
    </Box>
  )
})
