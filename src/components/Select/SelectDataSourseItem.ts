import { ReactNode } from 'react'

export type SelectDatasourceItem<ValueType> = {
  label: ReactNode
  value: ValueType
  searchLabel?: string
}
