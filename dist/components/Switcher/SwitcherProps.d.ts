import { CSSProperties } from 'react';
import { SwitcherItem } from './SwitcherItem';
import { ButtonFace } from '../Button';
export interface SwitcherProps<T> {
    items: SwitcherItem<T>[];
    value: T | T[] | undefined;
    onChange: (value: T | T[], error?: string) => void;
    direction?: 'horizontal' | 'vertical';
    multiselect?: boolean;
    disabled?: boolean;
    face?: ButtonFace;
    className?: string;
    itemClassName?: string;
    activeItemClassName?: string;
    style?: CSSProperties;
    itemStyle?: CSSProperties;
    activeItemStyle?: CSSProperties;
}
