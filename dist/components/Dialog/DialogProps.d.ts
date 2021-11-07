import { CardProps } from '../Card';
export interface DialogProps extends CardProps {
    id: string;
    open: boolean;
    onClose: () => void;
}
