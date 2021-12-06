import React, { FC, memo } from 'react'
import { PaginationProps } from './PaginationProps'
import { usePaginationMarkup } from './hooks'
import { Box } from './styles'

export const Pagination: FC<PaginationProps> = memo((props) => {
  const { className, style, centered = true, ...rest } = props
  const markup = usePaginationMarkup(rest)

  return (
    <Box className={className} style={style} $centered={centered}>
      {markup}
    </Box>
  )
})
