import * as React from 'react'
import { Id, toast, UpdateOptions } from 'react-toastify'
import { Icon } from '../Icon'
import { Button, BigToastContent, Title, WrappedIcon, Content, SmallToastContent, SmallToastIcon } from './styles'

const ThinCloseButton = ({ closeToast }: any) => (
  <Button onClick={closeToast}>
    <Icon name="cross" />
  </Button>
)

export const Toast = {
  dismiss: () => {
    toast.dismiss()
  },
  update: (toastId: Id, options: UpdateOptions) => {
    toast.update(toastId, options)
  },
  success: (title: React.ReactNode, message?: React.ReactNode) => {
    toast.success(
      <BigToastContent>
        <Title>
          {/* TODO: should take stroke color from current theme */}
          <WrappedIcon name="check" fill="#fff" /> {title || 'Success'}
        </Title>
        {message && <Content>{message}</Content>}
      </BigToastContent>,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 4000,
      },
    )
  },
  successSmall: (message: React.ReactNode) => {
    toast.success(
      <SmallToastContent>
        {/* TODO: should take stroke color from current theme */}
        <SmallToastIcon name="check" fill="#fff" size="S" /> {message}
      </SmallToastContent>,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 5000,
        closeButton: ThinCloseButton,
        hideProgressBar: true,
      },
    )
  },
  error: (title: React.ReactNode, message?: React.ReactNode) => {
    toast.error(
      <BigToastContent>
        <Title>
          {/* TODO: should take stroke color from current theme */}
          <WrappedIcon name="exclamation" fill="#fff" /> {title || 'Error'}
        </Title>
        {message && <Content>{message}</Content>}
      </BigToastContent>,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 4000,
      },
    )
  },
  errorSmall: (message: React.ReactNode) => {
    toast.error(
      <SmallToastContent>
        {/* TODO: should take stroke color from current theme */}
        <SmallToastIcon name="exclamation" fill="#fff" size="S" /> {message}
      </SmallToastContent>,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 5000,
        closeButton: ThinCloseButton,
        hideProgressBar: true,
      },
    )
  },
  info: (title: React.ReactNode, message?: React.ReactNode) => {
    toast.info(
      <BigToastContent>
        <Title>
          {/* TODO: should take stroke color from current theme */}
          <WrappedIcon name="info" color="#fff" /> {title || 'Information'}
        </Title>
        {message && <Content>{message}</Content>}
      </BigToastContent>,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 4000,
      },
    )
  },
  infoSuccessSmall: (message: React.ReactNode) => {
    toast.info(
      <SmallToastContent>
        {/* TODO: should take stroke color from current theme */}
        <SmallToastIcon name="check" color="white" size="S" /> {message}
      </SmallToastContent>,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 5000,
        closeButton: ThinCloseButton,
        hideProgressBar: true,
      },
    )
  },
  infoSmall: (message: React.ReactNode) => {
    toast.info(
      <SmallToastContent>
        {/* TODO: should take stroke color from current theme */}
        <SmallToastIcon name="info" color="white" size="S" /> {message}
      </SmallToastContent>,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 5000,
        closeButton: ThinCloseButton,
        hideProgressBar: true,
      },
    )
  },
  default: (title: React.ReactNode, message?: React.ReactNode) => {
    toast(
      <BigToastContent>
        <Title>
          {/* TODO: should take stroke color from current theme */}
          <WrappedIcon name="info" face="primary" /> {title || 'Information'}
        </Title>
        {message && <Content>{message}</Content>}
      </BigToastContent>,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 4000,
      },
    )
  },
  defaultSmall: (message: React.ReactNode) => {
    toast(
      <SmallToastContent>
        {/* TODO: should take stroke color from current theme */}
        <SmallToastIcon name="info" face="primary" size="S" /> {message}
      </SmallToastContent>,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 5000,
        closeButton: ThinCloseButton,
        hideProgressBar: true,
      },
    )
  },
}
