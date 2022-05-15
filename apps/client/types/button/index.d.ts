import { ElementType, ReactNode, JSXElementConstructor } from 'react';
import { PressEvents, FocusableProps, FocusableDOMProps, AriaLabelingProps } from '../shared';

interface ButtonProps extends PressEvents, FocusableProps {
  isDisabled?: boolean;
  children?: ReactNode;
}

interface ToggleButtonProps extends ButtonProps {
  isSelected?: boolean;
  defaultSelected?: boolean;
  onChange?: (isSelected: boolean) => void;
}
export interface AriaButtonElementTypeProps<T extends ElementType = 'button'> {
  elementType?: T | JSXElementConstructor<any>;
}

export interface LinkButtonProps<T extends ElementType = 'button'>
  extends AriaButtonElementTypeProps<T> {
  href?: string;
  target?: string;
  rel?: string;
}
interface AriaBaseButtonProps extends FocusableDOMProps, AriaLabelingProps {
  'aria-expanded'?: boolean;
  'aria-haspopup'?: boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
  'aria-controls'?: string;
  'aria-pressed'?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface AriaButtonProps<T extends ElementType = 'button'>
  extends ButtonProps,
    LinkButtonProps<T>,
    AriaBaseButtonProps {
  preventFocusOnPress?: boolean;
}

export interface AriaToggleButtonProps<T extends ElementType = 'button'>
  extends ToggleButtonProps,
    AriaBaseButtonProps,
    AriaButtonElementTypeProps<T> {
  preventFocusOnPress?: boolean;
}
