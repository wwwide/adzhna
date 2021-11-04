/**
 * Is given symbol RegExp object?
 * @param item - item to be checked
 */
export const isRegExp = (item: string | RegExp) => {
  return typeof item === 'object' && item?.constructor?.name === 'RegExp'
}
