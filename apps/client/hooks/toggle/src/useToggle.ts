import { InputHTMLAttributes, RefObject } from 'react';
import { filterDOMProps, mergeProps } from '@react-aria/utils';
import { useFocusable } from '@react-aria/focus';

import { AriaToggleProps } from '../../../types/checkbox';
import { ToggleState } from '../../../types/shared';
import { usePressReaction } from '../../interactions';

export interface ToggleAria {
  inputProps: InputHTMLAttributes<HTMLInputElement>;
}

export const useToggle = (
  props: AriaToggleProps,
  state: ToggleState,
  ref: RefObject<HTMLElement>
): ToggleAria => {
  const {
    isDisabled = false,
    isRequired,
    isReadOnly,
    value,
    name,
    children,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    validationState = 'valid',
  } = props;

  const onChange = (e: any) => {
    e.stopPropagation();
    state.setSelected(e.target.checked);
  };

  const hasChildren = children != null;
  const hasAriaLabel = ariaLabel != null || ariaLabelledby != null;
  if (!hasChildren && !hasAriaLabel) {
    console.warn('childrenが無いならaria-labelを指定してね');
  }

  const { pressProps } = usePressReaction({ isDisabled });

  const { focusableProps } = useFocusable(props, ref);
  const interactions = mergeProps(pressProps, focusableProps);
  const domProps = filterDOMProps(props, { labelable: true });

  return {
    inputProps: mergeProps(domProps, {
      'aria-invalid': validationState === 'invalid' || undefined,
      'aria-errormessage': props['aria-errormessage'],
      'aria-controls': props['aria-controls'],
      'aria-readonly': isReadOnly || undefined,
      'aria-required': isRequired || undefined,
      onChange,
      disabled: isDisabled,
      value,
      name,
      type: 'checkbox',
      ...interactions,
    }),
  };
};
