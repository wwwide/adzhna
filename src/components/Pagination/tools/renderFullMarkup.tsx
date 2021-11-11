import React, { CSSProperties, ReactElement } from 'react'
import { Page } from '../components/Page'
import { Dots } from '../components/Dots'
import { Icon } from '../../Icon'
import { renderInlinePages } from './renderInlinePages'
import { ButtonFace } from '../../Button'

export const renderFullMarkup = (
  page: number,
  maxInlinePages: number,
  pageCount: number,
  onClick: (number: number) => void,
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
): ReactElement | ReactElement[] => {
  const floorOfHalf = Math.floor(maxInlinePages / 2)
  const least = Math.max(page - floorOfHalf, 1)
  const greatest = Math.min(least + maxInlinePages - 1, pageCount)
  const needLeftArrows = least > 1
  const needRightArrows = greatest < pageCount
  let result: ReactElement[] = []

  if (needLeftArrows) {
    result = result.concat([
      <Page
        arrow
        key={-1000}
        number={1}
        onClick={onClick}
        pageButtonFace={pageButtonFace}
        activePageButtonFace={activePageButtonFace}
        arrowPageButtonFace={arrowPageButtonFace}
        pageButtonClassName={pageButtonClassName}
        activePageButtonClassName={activePageButtonClassName}
        arrowPageButtonClassName={arrowPageButtonClassName}
        pageButtonStyle={pageButtonStyle}
        activePageButtonStyle={activePageButtonStyle}
        arrowPageButtonStyle={arrowPageButtonStyle}
        disabled={disabled}
      >
        <Icon name="left-double-arrow" />
      </Page>,
      <Page
        arrow
        key={-999}
        number={page - 1}
        onClick={onClick}
        pageButtonFace={pageButtonFace}
        activePageButtonFace={activePageButtonFace}
        arrowPageButtonFace={arrowPageButtonFace}
        pageButtonClassName={pageButtonClassName}
        activePageButtonClassName={activePageButtonClassName}
        arrowPageButtonClassName={arrowPageButtonClassName}
        pageButtonStyle={pageButtonStyle}
        activePageButtonStyle={activePageButtonStyle}
        arrowPageButtonStyle={arrowPageButtonStyle}
        disabled={disabled}
      >
        <Icon name="left-arrow" />
      </Page>,
      <Dots key={-998} />,
    ])
  }

  result = result.concat(
    renderInlinePages(
      Math.min(least, pageCount - maxInlinePages + 1),
      maxInlinePages,
      page,
      onClick,
      [],
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
    ),
  )

  if (needRightArrows) {
    result = result.concat([
      <Dots key={-997} />,
      <Page
        arrow
        key={-996}
        number={page + 1}
        onClick={onClick}
        pageButtonFace={pageButtonFace}
        activePageButtonFace={activePageButtonFace}
        arrowPageButtonFace={arrowPageButtonFace}
        pageButtonClassName={pageButtonClassName}
        activePageButtonClassName={activePageButtonClassName}
        arrowPageButtonClassName={arrowPageButtonClassName}
        pageButtonStyle={pageButtonStyle}
        activePageButtonStyle={activePageButtonStyle}
        arrowPageButtonStyle={arrowPageButtonStyle}
        disabled={disabled}
      >
        <Icon name="right-arrow" />
      </Page>,
      <Page
        arrow
        key={-995}
        number={pageCount}
        onClick={onClick}
        pageButtonFace={pageButtonFace}
        activePageButtonFace={activePageButtonFace}
        arrowPageButtonFace={arrowPageButtonFace}
        pageButtonClassName={pageButtonClassName}
        activePageButtonClassName={activePageButtonClassName}
        arrowPageButtonClassName={arrowPageButtonClassName}
        pageButtonStyle={pageButtonStyle}
        activePageButtonStyle={activePageButtonStyle}
        arrowPageButtonStyle={arrowPageButtonStyle}
        disabled={disabled}
      >
        <Icon name="right-double-arrow" />
      </Page>,
    ])
  }

  return result
}
