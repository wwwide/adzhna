import React, { FC, memo } from 'react'
import { CardProps } from './CardProps'
import { Actions, Box, Content, Header, Title, Footer } from './styles'
import { CardFace } from './CardFace'

export const Card: FC<CardProps> = memo((props) => {
  const {
    className,
    contentClassName,
    contentStyle,
    footerClassName,
    footerStyle,
    children,
    face = CardFace.Default,
    footer,
    header,
    width,
    onClick,
    ...rest
  } = props

  return (
    <Box {...rest} $width={width} className={className} onClick={onClick}>
      {!!(header?.title || header?.actions) && (
        <Header $face={face} className={header.headerClassName} style={header.headerStyle}>
          {!!header.title && (
            <Title $hasActions={!!header.actions} className={header.titleClassName} style={header.titleStyle}>
              {header.title}
            </Title>
          )}
          {!!header.actions && <Actions>{header.actions}</Actions>}
        </Header>
      )}
      <Content className={contentClassName} style={contentStyle}>
        {children}
      </Content>
      {!!footer && (
        <Footer className={footerClassName} style={footerStyle}>
          {footer}
        </Footer>
      )}
    </Box>
  )
})
