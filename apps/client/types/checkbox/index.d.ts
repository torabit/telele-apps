import {
  AriaLabelingProps,
  AriaValidationProps,
  DOMProps,
  FocusableDOMProps,
  FocusableProps,
  InputBase,
  LabelableProps,
  Orientation,
  SpectrumLabelableProps,
  StyleProps,
  Validation,
  ValueBase,
} from '@react-types/shared';
import { ReactElement, ReactNode } from 'react';

export interface ToggleProps extends InputBase, Validation, FocusableProps {
  children?: ReactNode;
  defaultSelected?: boolean;
  isSelected?: boolean;
  onChange?: (isSelected: boolean) => void;
  value?: string;
  name?: string;
}

export interface AriaToggleProps
  extends ToggleProps,
    FocusableDOMProps,
    AriaLabelingProps,
    AriaValidationProps {
  'aria-controls'?: string;
}

export interface CheckboxGroupProps extends ValueBase<string[]>, InputBase, LabelableProps {}

export interface CheckboxProps extends ToggleProps {
  isIndeterminate?: boolean;
}

export interface AriaCheckboxProps extends CheckboxProps, AriaToggleProps {}

export interface AriaCheckboxGroupProps
  extends CheckboxGroupProps,
    DOMProps,
    AriaLabelingProps,
    AriaValidationProps {
  name?: string;
}

export interface AriaCheckboxGroupItemProps
  extends Omit<AriaCheckboxProps, 'isSelected' | 'defaultSelected'> {
  value: string;
}

export interface SpectrumCheckboxProps extends AriaCheckboxProps, StyleProps {
  isEmphasized?: boolean;
}

export interface SpectrumCheckboxGroupProps
  extends AriaCheckboxGroupProps,
    SpectrumLabelableProps,
    Validation,
    StyleProps {
  children: ReactElement<CheckboxProps> | ReactElement<CheckboxProps>[];
  orientation?: Orientation;
  isEmphasized?: boolean;
}
