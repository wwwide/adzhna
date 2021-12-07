import React, { FC, memo } from 'react'
import { Card } from '../../../Card'
import { ErrorDetailsProps } from './ErrorDetailsProps'
import { Pre } from './styles'

export const ErrorDetails: FC<ErrorDetailsProps> = memo((props) => {
  const { data, title = 'Something went wrong...', errorLabel = 'Error', ...rest } = props

  if (!data) {
    return <div>{title}</div>
  }

  return (
    <Card {...rest} face="danger" header={{ title }}>
      <span>
        <b>{errorLabel}:</b> {data.error.message}
      </span>
      {data.info && <Pre>{data.info.componentStack}</Pre>}
    </Card>
  )
})
