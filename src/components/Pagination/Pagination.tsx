import React, { FC, memo } from 'react'
import { PaginationProps } from './PaginationProps'
import { usePaginationMarkup } from './hooks'
import { Box } from './styles'

export const Pagination: FC<PaginationProps> = memo((props) => {
  const { className, style, ...rest } = props
  const markup = usePaginationMarkup(rest)

  return (
    <Box className={className} style={style}>
      {markup}
    </Box>
  )
})
