export interface CameraProps {
    videoBoxClassName?: string;
    onTakePhoto: (photo: Blob | null) => void;
}
