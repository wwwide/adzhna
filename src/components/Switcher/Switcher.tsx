import React from 'react'
import { SwitcherProps } from './SwitcherProps'
import { useBehavior } from './hooks'

import { _Switcher, _ItemButton } from './styles'

export const Switcher = <T,>(props: SwitcherProps<T>) => {
  const {
    items,
    value,
    onChange,
    disabled,
    face,
    direction = 'horizontal',
    multiselect: multiple = false,
    className,
    itemClassName,
    activeItemClassName,
    style,
    itemStyle,
    activeItemStyle,
    ...rest
  } = props
  const { changeHandler, isSelected } = useBehavior(items, value, onChange, multiple)

  if (!items.length) {
    return null
  }

  return (
    <_Switcher $direction={direction} tabIndex={0} className={className} style={style} {...rest}>
      {items.map((item, index) => {
        const active = isSelected(item.value, value)

        return (
          <_ItemButton
            $active={active}
            className={`${itemClassName} ${active && activeItemClassName}`.trim()}
            style={{ ...(itemStyle || {}), ...(active ? activeItemStyle : {}) }}
            disabled={disabled}
            face={active ? face || 'primary' : 'link'}
            key={index}
            onClick={() => changeHandler(item.value)}
          >
            {item.label}
          </_ItemButton>
        )
      })}
    </_Switcher>
  )
}
