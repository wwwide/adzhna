import React, { FC, memo } from 'react'
import { CameraProps } from './CameraProps'
import { useComponentEssence } from './hooks'

import { FlashIcon, ShotButton, Box, PhotoCanvas, VideoCanvas } from './styles'

export const Camera: FC<CameraProps> = memo((props) => {
  const { videoBoxClassName, onTakePhoto, ...rest } = props
  const { canvasRef, videoRef, takeSnapShot, isTorchAvailable, isTorchEnabled, switchTorch } =
    useComponentEssence(onTakePhoto)

  return (
    <Box {...rest}>
      {isTorchAvailable && (
        <FlashIcon name={isTorchEnabled ? 'flash-on' : 'flash-off'} fill="#fff" size="L" onClick={switchTorch} />
      )}
      <VideoCanvas autoPlay playsInline ref={videoRef} className={videoBoxClassName} />
      <PhotoCanvas ref={canvasRef} />
      <ShotButton onClick={takeSnapShot} />
    </Box>
  )
})
