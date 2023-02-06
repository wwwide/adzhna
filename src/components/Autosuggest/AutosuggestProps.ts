import { SelectProps, SelectDatasourceItem } from '../Select'
import { AutosuggestChangeHandler } from './types'

export interface AutosuggestProps<ResponseItem, ValueType>
  extends Omit<SelectProps<ValueType>, 'dataSource' | 'isLoading' | 'onChange'> {
  dataSupplier: (term: string) => Promise<ResponseItem[]>
  responseMapper: (item: ResponseItem) => SelectDatasourceItem<ValueType>
  onChange: AutosuggestChangeHandler<ValueType>
}
