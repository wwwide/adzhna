import { ReactNode } from 'react'

export const useDataSourceValidation = (
  hasSearch: boolean,
  dataSource: { label: ReactNode; value: any; searchLabel?: string }[],
) => {
  if (!hasSearch) {
    return
  }

  dataSource.forEach(({ label, searchLabel }) => {
    if (typeof label !== 'string' && !searchLabel) {
      throw new Error(
        'When you use text search mode, each data source item should have label of type string or additional "searchLabel" field.',
      )
    }
  })
}
