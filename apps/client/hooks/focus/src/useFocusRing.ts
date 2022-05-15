import { HTMLAttributes, useState, useRef } from 'react';
import {
  isFocusVisible,
  useFocus,
  useFocusVisibleListener,
  useFocusWithin,
} from '@react-aria/interactions';

interface FocusRingProps {
  within?: boolean;
  isTextInput?: boolean;
  autoFocus?: boolean;
}

interface FocusRingAria {
  isFocused: boolean;
  isFocusVisible: boolean;
  focusProps: HTMLAttributes<HTMLElement>;
}

export const useFocusRing = (props: FocusRingProps = {}): FocusRingAria => {
  const { autoFocus = false, isTextInput, within } = props;
  const state = useRef({
    isFocused: false,
    isFocusVisible: autoFocus || isFocusVisible(),
  }).current;
  const [isFocused, setFocused] = useState(false);
  const [isFocusVisibleState, setFocusVisible] = useState(
    () => state.isFocused && state.isFocusVisible
  );

  const updateState = () => setFocusVisible(state.isFocused && state.isFocusVisible);

  const onFocusChange = (isFocused: boolean) => {
    state.isFocused = isFocused;
    setFocused(isFocused);
    updateState();
  };

  useFocusVisibleListener(
    (isFocusVisible) => {
      state.isFocusVisible = isFocusVisible;
      updateState();
    },
    [],
    { isTextInput }
  );

  const { focusProps } = useFocus({ isDisabled: within, onFocusChange });

  const { focusWithinProps } = useFocusWithin({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange,
  });

  return {
    isFocused,
    isFocusVisible: state.isFocused && isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps,
  };
};
