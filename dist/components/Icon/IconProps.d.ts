import { IconName } from './IconName';
import { IconSize } from './IconSize';
import { IconFace } from './IconFace';
import { IconPosition } from './IconPosition';
export interface IconProps {
    name: IconName;
    face?: IconFace;
    size?: IconSize | string;
    color?: string;
    fill?: string;
    position?: IconPosition;
}
