import React, { FC, memo } from 'react'
import { ButtonProps } from './ButtonProps'
import { getButtonByFace } from './getButtonByFace'
import { ButtonFace } from './ButtonFace'

export const Button: FC<ButtonProps> = memo((props) => {
  const { children, face = ButtonFace.Secondary, outlined, ...rest } = props
  const Element = getButtonByFace(face)

  if (!Element) {
    return null
  }

  return (
    <Element $outlined={outlined} {...rest}>
      {children}
    </Element>
  )
})
