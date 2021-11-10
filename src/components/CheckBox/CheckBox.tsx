import React, { FC, memo, useCallback } from 'react'
import { CheckBoxProps } from './CheckBoxProps'
import { IconFace, IconName, IconSize } from '../Icon'
import { Box, Input, Label, Mark, Outer } from './styles'

export const CheckBox: FC<CheckBoxProps> = memo((props) => {
  const {
    boxClassName,
    boxStyle,
    boxIcon,
    className,
    onChange,
    labelClassName,
    labelStyle,
    label,
    value,
    style,
    ...rest
  } = props

  const onChangeWrapper = useCallback(() => {
    if (onChange) {
      onChange(!value, undefined)
    }
  }, [onChange, value])

  return (
    <Outer className={className} style={style}>
      <Label className={labelClassName} style={labelStyle}>
        <Box $hasLabel={!!label} className={boxClassName} style={boxStyle}>
          <Mark
            $visible={!!value}
            name={boxIcon?.name || IconName.Check}
            face={boxIcon?.face || IconFace.Primary}
            color={boxIcon?.color}
            fill={boxIcon?.fill}
            size={boxIcon?.size || IconSize.M}
          />
          <Input {...rest} type="checkbox" onChange={onChangeWrapper} value={value as any} />
        </Box>
        {label}
      </Label>
    </Outer>
  )
})
