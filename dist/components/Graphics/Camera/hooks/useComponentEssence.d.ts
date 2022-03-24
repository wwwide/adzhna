export declare const useComponentEssence: (photoHandler: (photo: Blob | null) => void) => {
    canvasRef: import("react").MutableRefObject<HTMLCanvasElement | null>;
    videoRef: import("react").MutableRefObject<HTMLVideoElement | null>;
    width: number;
    height: number;
    takeSnapShot: () => void;
    capabilities: MediaTrackCapabilities | null;
    isZoomAvailable: boolean;
    isTorchAvailable: boolean;
    isTorchEnabled: import("react").MutableRefObject<boolean>;
    switchTorch: () => void;
};
