import React, { FC, memo } from 'react'
import { CardProps } from './CardProps'
import { Actions, Box, Content, Header, Title, Footer } from './styles'
import { Spinner } from '../Spinner'

export const Card: FC<CardProps> = memo((props) => {
  const {
    className,
    contentClassName,
    contentStyle,
    footerClassName,
    footerStyle,
    children,
    face = 'default',
    footer,
    header,
    width,
    onClick,
    pending,
    headerPending,
    footerPending,
    contentPending,
    ...rest
  } = props

  return (
    <Box {...rest} $width={width} className={className} onClick={onClick}>
      <Spinner visible={pending}>
        {!!(header?.title || header?.actions) && (
          <Spinner visible={headerPending && !pending}>
            <Header $face={face} className={header.headerClassName} style={header.headerStyle}>
              {!!header.title && (
                <Title $hasActions={!!header.actions} className={header.titleClassName} style={header.titleStyle}>
                  {header.title}
                </Title>
              )}
              {!!header.actions && <Actions>{header.actions}</Actions>}
            </Header>
          </Spinner>
        )}
        <Spinner visible={contentPending && !pending}>
          <Content className={contentClassName} style={contentStyle}>
            {children}
          </Content>
        </Spinner>
        {!!footer && (
          <Spinner visible={footerPending && !pending}>
            <Footer className={footerClassName} style={footerStyle}>
              {footer}
            </Footer>
          </Spinner>
        )}
      </Spinner>
    </Box>
  )
})
