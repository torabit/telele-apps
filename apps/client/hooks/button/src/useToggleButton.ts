import { ElementType, HTMLAttributes, RefObject } from 'react';
import { useToggleButton } from 'react-aria';
import { ButtonAria } from './useButton';
import { AriaToggleButtonProps } from '../../../types/button';
import { ToggleState } from '../../../types/shared';

export const useToggleButtonReaction = (
  props: AriaToggleButtonProps<ElementType>,
  state: ToggleState,
  ref: RefObject<any>
): ButtonAria<HTMLAttributes<any>> => {
  const { buttonProps, isPressed } = useToggleButton(props, state, ref);

  return { isPressed, buttonProps };
};
