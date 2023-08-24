import SC from 'styled-components'
import { Icon } from '../Icon'

export const WrappedIcon = SC(Icon)`
  margin-right: 22px;
`

export const SmallToastIcon = SC(Icon)`
  margin-right: 10px;
  margin-left: 8px;
  display: flex;
`

export const SmallToastContent = SC.div`
  display: flex;
  align-items: center;
  line-height: 22px;
  font-size: 14px;
  font-weight: 400;
`

export const BigToastContent = SC.div`
  margin: 16px;
`

export const Title = SC.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`

export const Content = SC.div`
  margin-top: 10px;
  font-size: 13px;
`

export const Button = SC.button`
  border: none;
  background-color: transparent;
  width: 20px;
  height: 20px;
  padding: 0;
  margin-top: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
