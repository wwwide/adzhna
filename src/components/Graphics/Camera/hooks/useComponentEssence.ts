import { useCallback, useEffect, useRef, useState } from 'react'

export const useComponentEssence = (photoHandler: (photo: Blob | null) => void) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [dimensions, setDimensions] = useState([0, 0])
  const [capabilities, setCapabilities] = useState<MediaTrackCapabilities | null>(null)
  const isTorchAvailable = !!capabilities?.torch
  const isZoomAvailable = !!capabilities?.zoom
  const [track, setTrack] = useState<MediaStreamTrack | null>(null)
  const isTorchEnabled = useRef(false)

  useEffect(() => {
    if (!navigator.mediaDevices) {
      return
    }

    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false }).then((mediaStream) => {
      const track = mediaStream.getVideoTracks()[0]

      if (track) {
        const trackCapabilities = track.getCapabilities()
        const settings = track.getSettings()

        if (settings) {
          setDimensions([settings.width || 0, settings.height || 0])
        }

        setTrack(track)
        setCapabilities(trackCapabilities)

        if (isZoomAvailable) {
          track.applyConstraints({ advanced: [{ zoom: true }] }).then()
        }
      }

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream
      }
    })
  }, [setDimensions, setCapabilities, videoRef, setTrack, isZoomAvailable])

  const takeSnapShot = useCallback(() => {
    if (canvasRef.current) {
      canvasRef.current.width = dimensions[0]
      canvasRef.current.height = dimensions[1]
      const context = canvasRef.current.getContext('2d')

      if (videoRef.current && context) {
        context.drawImage(videoRef.current, 0, 0, dimensions[0], dimensions[1])
      }

      canvasRef.current.toBlob((blob) => {
        photoHandler(blob)
      })
    }
  }, [dimensions, canvasRef, photoHandler])

  const switchTorch = useCallback(() => {
    if (track) {
      track.applyConstraints({ advanced: [{ torch: !isTorchEnabled }] }).then()
    }
  }, [track, isTorchAvailable, isTorchEnabled])

  return {
    canvasRef,
    videoRef,
    width: dimensions[0],
    height: dimensions[1],
    takeSnapShot,
    capabilities,
    isZoomAvailable,
    isTorchAvailable,
    isTorchEnabled,
    switchTorch,
  }
}
