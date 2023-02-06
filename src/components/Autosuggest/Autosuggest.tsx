import React from 'react'
import { Select } from '../Select'
import { AutosuggestProps } from './AutosuggestProps'
import { useComponentEssence } from './hooks'

export const AutoSuggest = <ResponseShape, ValueType>(props: AutosuggestProps<ResponseShape, ValueType>) => {
  const { value, onChange, dataSupplier, searchTerm = '', responseMapper, onSearch, ...rest } = props

  const { dataSource, onTermChange, isFetching, onSelect } = useComponentEssence<ResponseShape, ValueType>(
    dataSupplier,
    responseMapper,
    onChange,
    searchTerm,
    onSearch,
  )

  return (
    <Select
      searchTerm={searchTerm}
      value={value}
      onChange={onSelect}
      dataSource={dataSource}
      onSearch={onTermChange}
      isLoading={isFetching}
      {...rest}
    />
  )
}
