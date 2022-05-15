import { RefObject, HTMLAttributes } from 'react';
import { usePress } from 'react-aria';
import { PressEvents } from '../../../types/shared';

export interface PressProps extends PressEvents {
  isDisabled?: boolean;
  preventFocusOnPress?: boolean;
  shouldCancelOnPointerExit?: boolean;
  allowTextSelectionOnPress?: boolean;
}

export interface PressHookProps extends PressProps {
  ref?: RefObject<HTMLElement>;
}

export interface PressResult {
  isPressed: boolean;
  pressProps: HTMLAttributes<HTMLElement>;
}

export const usePressReaction = (props: PressHookProps): PressResult => {
  const { pressProps, isPressed } = usePress(props);
  return {
    isPressed: isPressed,
    pressProps: pressProps,
  };
};
