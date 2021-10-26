import { ButtonFace } from './ButtonFace';
import { StyledComponent } from 'styled-components';
import { Theme } from 'theme';
import { ButtonStyledProps } from './ButtonStyledProps';
export declare const getButtonByFace: (face: ButtonFace) => StyledComponent<'button', Theme, ButtonStyledProps> | undefined;
