import {
  AriaLabelingProps,
  FocusableDOMProps,
  FocusableProps,
  InputBase,
  StyleProps,
} from '../shared';
import { ReactNode } from 'react';

interface SwitchBase extends InputBase, FocusableProps {
  children?: ReactNode;
  defaultSelected?: boolean;
  isSelected?: boolean;
  onChange?: (isSelected: boolean) => v;
  name?: string;
}
export interface SwitchProps extends SwitchBase {}
export interface AriaSwitchBase extends SwitchBase, FocusableDOMProps, AriaLabelingProps {
  'aria-controls'?: string;
}
export interface AriaSwitchProps extends SwitchProps, AriaSwitchBase {}

export interface SpectrumSwitchProps extends AriaSwitchProps, StyleProps {
  isEmphasized?: boolean;
}
