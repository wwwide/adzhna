import React, { FC, memo } from 'react'
import { SpinnerProps } from './SpinnerProps'
import { Spinner as S, Overlay, Box } from './styles'

export const Spinner: FC<SpinnerProps> = memo((props) => {
  const { children, visible, ...rest } = props

  if (children) {
    if (!visible) {
      return children as any
    }
    return (
      <Box>
        {children}
        <Overlay $position="absolute" />
        <S {...{ ...rest, centered: true }} />
      </Box>
    )
  }

  if (rest.centered) {
    return (
      <Overlay $position="absolute">
        <S {...rest} />
      </Overlay>
    )
  }
  return <S {...rest} />
})
