import { RefObject, HTMLAttributes, ElementType } from 'react';
import { AriaButtonProps } from '../../../types/button';
import { useButton } from 'react-aria';

export interface ButtonAria<T> {
  buttonProps: T;
  isPressed: boolean;
}

export const useButtonReaction = (
  props: AriaButtonProps<ElementType>,
  ref: RefObject<any>
): ButtonAria<HTMLAttributes<any>> => {
  const { buttonProps, isPressed } = useButton(props, ref);

  return { isPressed, buttonProps };
};
