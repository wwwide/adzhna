import React, { CSSProperties, ReactElement } from 'react'
import { Page } from '../components/Page'
import { ButtonFace } from '../../Button'

export const renderInlinePages = (
  start: number,
  count: number,
  active: number,
  onClick: (number: number) => void,
  accumulator: ReactElement[] = [],
  pageButtonFace?: ButtonFace,
  activePageButtonFace?: ButtonFace,
  arrowPageButtonFace?: ButtonFace,
  pageButtonClassName?: string,
  activePageButtonClassName?: string,
  arrowPageButtonClassName?: string,
  pageButtonStyle?: CSSProperties | undefined,
  activePageButtonStyle?: CSSProperties | undefined,
  arrowPageButtonStyle?: CSSProperties | undefined,
  disabled?: boolean,
): ReactElement[] => {
  if (accumulator.length >= count) {
    return accumulator
  }
  return renderInlinePages(
    start + 1,
    count,
    active,
    onClick,
    accumulator.concat(
      <Page
        key={start}
        number={start}
        onClick={onClick}
        active={start === active}
        pageButtonFace={pageButtonFace}
        activePageButtonFace={activePageButtonFace}
        pageButtonClassName={pageButtonClassName}
        activePageButtonClassName={activePageButtonClassName}
        pageButtonStyle={pageButtonStyle}
        activePageButtonStyle={activePageButtonStyle}
        disabled={disabled}
      >
        {start}
      </Page>,
    ),
    pageButtonFace,
    activePageButtonFace,
    arrowPageButtonFace,
    pageButtonClassName,
    activePageButtonClassName,
    arrowPageButtonClassName,
    pageButtonStyle,
    activePageButtonStyle,
    arrowPageButtonStyle,
    disabled,
  )
}
