import React, { FC, memo, useMemo } from 'react'
import { ButtonProps } from './ButtonProps'
import { getButtonByFace } from './getButtonByFace'
import { ButtonFace } from './ButtonFace'
import { getIconFaceByButtonFace } from './getIconFaceByButtonFace'
import { ContentWithIcon, WrappedIcon } from './styles'

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    children,
    disabled,
    face = ButtonFace.Secondary,
    icon,
    outlined,
    ...rest
  } = props
  const Element = getButtonByFace(face)

  if (!Element) {
    return null
  }

  const content = useMemo(() => {
    if (!icon) {
      return children
    }
    return (
      <ContentWithIcon $position={icon.position}>
        <WrappedIcon
          {...{ ...icon, face: icon.face || getIconFaceByButtonFace(face, disabled) }}
        />
        {children}
      </ContentWithIcon>
    )
  }, [children, icon])

  return (
    <Element $outlined={outlined} $disabled={disabled} {...rest}>
      {content}
    </Element>
  )
})

