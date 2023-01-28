import { ReactElement, useCallback } from 'react'
import { PaginationProps } from '../PaginationProps'
import { renderInlinePages, renderFullMarkup } from '../tools'

export const usePaginationMarkup = (props: PaginationProps): ReactElement | ReactElement[] | null => {
  const {
    page,
    size,
    total,
    onChange,
    maxInlinePages = 5,
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
  } = props
  const pageCount = Math.ceil(total / size)
  const onChangePage = useCallback((page: number) => onChange(page, size), [onChange, size])

  if (maxInlinePages % 2 === 0) {
    throw new Error('"maxInlinePages" parameter should be odd number.')
  }

  if (total < size) {
    return null
  }

  if (pageCount <= maxInlinePages) {
    return renderInlinePages(
      1,
      pageCount,
      page,
      onChangePage,
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
    )
  }

  return renderFullMarkup(
    page,
    maxInlinePages,
    pageCount,
    onChangePage,
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
