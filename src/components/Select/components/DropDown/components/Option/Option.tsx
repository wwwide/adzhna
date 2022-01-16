import React, { FC, memo, useCallback } from 'react'
import { OptionProps } from './OptionProps'

import { Box } from './styles'

export const Option: FC<OptionProps> = memo((props) => {
  const { active, highlighted, value, label, onSelect, className, style } = props
  const onSelectWrapper = useCallback(() => onSelect(value), [value, onSelect])

  return (
    <Box $active={active} $highlighted={highlighted} onClick={onSelectWrapper} className={className} style={style}>
      {label}
    </Box>
  )
})
