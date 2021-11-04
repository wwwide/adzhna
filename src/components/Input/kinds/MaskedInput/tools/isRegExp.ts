export const isRegExp = (item: any) => {
  return typeof item === 'object' && item?.constructor?.name === 'RegExp'
}
