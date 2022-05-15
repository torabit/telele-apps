import { FocusEvent, KeyboardEvent as ReactKeyboardEvent } from 'react';

export type KeyboardEvent = BaseEvent<ReactKeyboardEvent<any>>;

type PointerType = 'mouse' | 'pen' | 'touch' | 'keyboard' | 'virtual';

export interface PressEvent {
  type: 'pressstart' | 'pressend' | 'pressup' | 'press';
  pointerType: PointerType;
  target: HTMLElement;
  shiftKey: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
  altKey: boolean;
}

export interface KeyboardEvents {
  onKeyDown?: (e: KeyboardEvent) => void;
  onKeyUp?: (e: KeyboardEvent) => void;
}

export interface FocusEvents {
  onFocus?: (e: FocusEvent) => void;
  onBlur?: (e: FocusEvent) => void;
  onFocusChange?: (isFocused: boolean) => void;
}

export interface PressEvents {
  onPress?: (e: PressEvent) => void;
  onPressStart?: (e: PressEvent) => void;
  onPressEnd?: (e: PressEvent) => void;
  onPressChange?: (isPressed: boolean) => void;
  onPressUp?: (e: PressEvent) => void;
}

export interface FocusableProps extends FocusEvents, KeyboardEvents {
  autoFocus?: boolean;
}
