import React, { FC, memo, useCallback } from 'react'
import { PageProps } from './PageProps'
import { Box } from './styles'

export const Page: FC<PageProps> = memo((props) => {
  const {
    arrow,
    children,
    number,
    onClick,
    active,
    activePageButtonFace,
    pageButtonFace,
    arrowPageButtonFace,
    pageButtonClassName,
    activePageButtonClassName,
    arrowPageButtonClassName,
    pageButtonStyle,
    activePageButtonStyle,
    arrowPageButtonStyle,
    disabled,
  } = props
  const onClickWrapper = useCallback(() => onClick(number), [number, onClick])
  const regularFace = pageButtonFace || 'link'
  const activeFace = activePageButtonFace || 'primary'
  const arrowFace = arrowPageButtonFace || 'link'
  let face = active ? activeFace : regularFace
  let className = active ? activePageButtonClassName : pageButtonClassName
  let style = active ? activePageButtonStyle : pageButtonStyle

  if (arrow) {
    face = arrowFace
  }
  if (arrow) {
    className = arrowPageButtonClassName || className
  }
  if (arrow) {
    style = arrowPageButtonStyle || style
  }

  return (
    <Box $active={active} onClick={onClickWrapper} face={face} className={className} style={style} disabled={disabled}>
      {children}
    </Box>
  )
})
