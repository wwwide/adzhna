import { useCallback, useEffect, useState } from 'react'
import { SelectDatasourceItem } from '../../Select'

/**
 *
 * @param dataSupplier function returning a promise with data by search term
 * @param responseMapper - function mapping response item to an item which can be accepted as Select datasource item.
 * @param onChange - change handler.
 * @param onSearch - search term change handler.
 * @param term - current search term.
 */
export const useComponentEssence = <ResponseShape, ValueType>(
  dataSupplier: (term: string) => Promise<ResponseShape[]>,
  responseMapper: (item: ResponseShape) => SelectDatasourceItem<ValueType>,
  onChange: (value: ValueType, error?: string) => void,
  term: string,
  onSearch?: (text: string) => void,
) => {
  // Term used for the newwork request.
  const [networkTerm, setNetworkTerm] = useState(term)

  // Debounde timer used for providing a network request timeout.
  const [timer, setTimer] = useState(0)

  // Fetch flag.
  const [isFetching, setFetching] = useState(false)

  // Data received from server.
  const [data, setData] = useState<ResponseShape[]>([])

  // Run data fetch when networkTerm changes.
  useEffect(() => {
    setFetching(true)
    dataSupplier(networkTerm)
      .then((response) => {
        setData(response)
      })
      .finally(() => {
        setFetching(false)
      })
  }, [networkTerm, dataSupplier])

  // Convert server data to datasource.
  const dataSource = (data || []).map((item) => responseMapper(item))

  // Schedule network call after local term change.
  const onTermChange = useCallback(
    (value: string) => {
      if (onSearch) {
        onSearch(value)
      }

      if (timer) {
        clearTimeout(timer)
      }

      setTimer(
        window.setTimeout(() => {
          setNetworkTerm(value)
          setTimer(0)
        }, 1000),
      )
    },
    [onSearch, timer, setTimer, setNetworkTerm],
  )

  // Option select handler.
  const onSelect = useCallback(
    (value: ValueType, error?: string) => {
      onChange(value, error)

      const option = dataSource.find((i) => i.value === value)

      if (option && onSearch) {
        onSearch(typeof option.label === 'string' ? option.label : option.searchLabel || '')
      }
    },
    [onSearch, onChange, dataSource],
  )

  return {
    dataSource,
    isFetching,
    term,
    onSelect,
    onTermChange: onSearch ? onTermChange : undefined,
  }
}
