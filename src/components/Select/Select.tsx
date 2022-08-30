import React from 'react'
import { useOutsideClick, useViewportUpdateListener } from 'hooks'
import { useComponentsGuts } from './hooks'
import { DropDown } from './components/DropDown'
import { SearchField } from './components/SearchField'
import { SelectProps } from './SelectProps'
import { InnerPicker } from './components/InnerPicker'

import { Box } from './styles'

export const Select = function <ValueType>(props: SelectProps<ValueType>) {
  const {
    className,
    dataSource,
    containerSelectors,
    value,
    onChange,
    validator,
    inputClassName,
    inputStyle,
    dropDownClassName,
    dropDownStyle,
    optionStyle,
    optionClassName,
    icon,
    disabled,
    maxDropDownHeight,
    optionRenderer,
    onSearch,
    searchTerm,
    isLoading,
    placeholder,
    preventScrollOnFocus = true,
    closeOnScroll = true,
  } = props

  const {
    dropDownVisible,
    closeDropDown,
    switchDropDown,
    openDropDown,
    boxRef,
    dropDownRef,
    dropDownTop,
    innerRef,
    innerRect,
    scrollAndResizeHandler,
    valueOption,
    onOptionSelect,
    keyboardHandler,
    focused,
    onFocus,
    onBlur,
    highlightedValue,
    onSearchTermChange,
  } = useComponentsGuts(dataSource, value, onChange, !!onSearch, closeOnScroll, onSearch, validator)

  useOutsideClick(boxRef, closeDropDown)
  useViewportUpdateListener(scrollAndResizeHandler, dropDownVisible, containerSelectors)

  return (
    <Box
      tabIndex={0}
      ref={boxRef}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={disabled ? undefined : keyboardHandler}
      className={className}
    >
      {onSearch ? (
        <SearchField
          preventScrollOnFocus={preventScrollOnFocus}
          placeholder={placeholder}
          isLoading={isLoading}
          onDropDownOpen={openDropDown}
          valueOption={valueOption}
          ref={innerRef}
          onTermChange={onSearchTermChange}
          searchTerm={searchTerm}
          icon={icon}
          dropDownVisible={dropDownVisible}
          disabled={disabled}
        />
      ) : (
        <InnerPicker
          isLoading={isLoading}
          focused={focused}
          disabled={disabled}
          icon={icon}
          visible={dropDownVisible}
          inputClassName={inputClassName}
          inputStyle={inputStyle}
          label={valueOption?.label || '---'}
          onSwitchDropDown={switchDropDown}
          ref={innerRef}
        />
      )}
      <DropDown
        className={dropDownClassName}
        style={dropDownStyle}
        optionClassName={optionClassName}
        optionStyle={optionStyle}
        visible={dropDownVisible}
        dataSource={dataSource}
        ref={dropDownRef}
        left={innerRect?.left || 0}
        top={dropDownTop}
        width={innerRect?.width || 0}
        onSelect={onOptionSelect}
        value={value}
        highlightedValue={highlightedValue}
        maxHeight={maxDropDownHeight}
        optionRenderer={optionRenderer}
      />
    </Box>
  )
}
