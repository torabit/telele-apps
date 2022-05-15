import { InputHTMLAttributes, RefObject } from 'react';
import { AriaSwitchProps } from '../../../types/switch';
import { ToggleState } from '../../../types/shared';
import { useToggle } from '../../toggle/src';

export interface SwitchAria {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
}

export const useSwitchReaction = (
  props: AriaSwitchProps,
  state: ToggleState,
  ref: RefObject<HTMLInputElement>
): SwitchAria => {
  const { inputProps } = useToggle(props, state, ref);
  const { isSelected } = state;

  return {
    inputProps: {
      ...inputProps,
      role: 'switch',
      checked: isSelected,
      'aria-checked': isSelected,
    },
  };
};
