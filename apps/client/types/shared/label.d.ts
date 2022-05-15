import { ReactNode } from 'react';

export type LabelPosition = 'top' | 'side';
export type Alignment = 'start' | 'end';
export type NecessityIndicator = 'icon' | 'label';

export interface LabelableProps {
  label?: ReactNode;
}

export interface SpectrumLabelableProps extends LabelableProps {
  labelPosition?: LabelPosition;
  labelAlign?: Alignment;
  necessityIndicator?: NecessityIndicator;
  isRequired?: boolean;
}
