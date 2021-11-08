import { CSSProperties, ReactElement } from 'react';
import { ButtonFace } from '../../Button';
export declare const renderInlinePages: (start: number, count: number, active: number, onClick: (number: number) => void, accumulator?: ReactElement[], pageButtonFace?: ButtonFace | undefined, activePageButtonFace?: ButtonFace | undefined, arrowPageButtonFace?: ButtonFace | undefined, pageButtonClassName?: string | undefined, activePageButtonClassName?: string | undefined, arrowPageButtonClassName?: string | undefined, pageButtonStyle?: CSSProperties | undefined, activePageButtonStyle?: CSSProperties | undefined, arrowPageButtonStyle?: CSSProperties | undefined, disabled?: boolean | undefined) => ReactElement[];
