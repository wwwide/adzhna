import React, { FC, memo } from 'react'
import { SpinnerProps } from './SpinnerProps'
import { Spinner as S, Overlay } from './styles'

export const Spinner: FC<SpinnerProps> = memo((props) => {
  if (props.centered) {
    return (
      <Overlay>
        <S {...props} />
      </Overlay>
    )
  }
  return <S {...props} />
})
