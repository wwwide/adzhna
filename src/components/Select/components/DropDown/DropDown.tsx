import React, { ForwardedRef, forwardRef, Fragment, memo } from 'react'
import { DropDownProps } from './DropDownProps'
import { Option } from './components/Option'

import { Box } from './styles'

export const DropDown = memo(
  forwardRef((props: DropDownProps, ref: ForwardedRef<any>) => {
    const {
      className,
      style,
      optionStyle,
      optionClassName,
      visible,
      dataSource,
      left,
      top,
      width,
      onSelect,
      value,
      highlightedValue,
      optionRenderer,
      maxHeight = 500,
    } = props

    return (
      <Box
        $visible={visible}
        $maxHeight={maxHeight}
        className={className}
        ref={ref}
        style={{
          ...style,
          left: `${left}px`,
          width: `${width}px`,
          top: `${top}px`,
        }}
      >
        {dataSource.map((item) =>
          optionRenderer ? (
            <Fragment key={JSON.stringify(item.value)}>
              {optionRenderer(
                item.label,
                item.value,
                onSelect,
                value === item.value,
                highlightedValue === item.value,
                optionClassName,
                optionStyle,
              )}
            </Fragment>
          ) : (
            <Option
              className={optionClassName}
              style={optionStyle}
              key={JSON.stringify(item.value)}
              label={item.label}
              value={item.value}
              onSelect={onSelect}
              active={value === item.value}
              highlighted={highlightedValue === item.value}
            />
          ),
        )}
      </Box>
    )
  }),
)
