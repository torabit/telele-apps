export type ValidationState = 'valid' | 'invalid';

export interface Validation {
  validationState?: ValidationState;
  isRequired?: boolean;
}

export interface InputBase {
  isDisabled?: boolean;
  isReadOnly?: boolean;
}

export interface ValueBase<T, C = T> {
  value?: T;
  defaultValue?: T;
  onChange?: (value: C) => void;
}
