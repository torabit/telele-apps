import React, { useRef, ReactElement, ReactNode } from 'react';
import { ToggleState } from '../../../types/shared';
import { useSwitchReaction, useFocusRing, useId } from '../../../hooks';

interface SwitchProps {
  children?: ReactNode;
  isSelected: boolean;
  setSelected: (toggled: boolean) => void;
  ariaLabel?: string;
  paddingInline?: string;
}

export const Switch: React.VFC<SwitchProps> = (props): ReactElement => {
  const { isSelected, setSelected, ariaLabel, children, paddingInline = 0 } = props;
  const toggle = () => setSelected(!isSelected);
  const state: ToggleState = { isSelected, setSelected, toggle };
  const ref = useRef<HTMLInputElement>(null);
  const { inputProps } = useSwitchReaction({ ...props, 'aria-label': ariaLabel }, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();
  const switchID = useId();

  const colorMode = getCurrentSwitchColor(isSelected, 'color');
  const circleColorMode = getCurrentSwitchColor(isSelected, 'circle');
  const hoverColorMode = getCurrentSwitchColor(isSelected, 'hover');
  const focusedStyle = isFocusVisible ? 'focused' : null;

  return (
    <>
      <label className={['toggle-switch', focusedStyle].join(' ')}>
        {children}
        <input id={switchID} {...inputProps} {...focusProps} ref={ref} />
        <label htmlFor={switchID} className='toggle-label' />
      </label>
      <style jsx>{`
        .toggle-switch input[type='checkbox'] {
          position: absolute;
          opacity: 0;
        }
        .toggle-switch input[type='checkbox']:checked + .toggle-label::after {
          content: '';
          left: calc((100% - 1.2rem) - 0.2rem);
        }
        .toggle-switch input[type='checkbox']:checked + .toggle-label::before {
          opacity: 1;
        }
        .toggle-switch {
          user-select: none;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-inline: ${paddingInline};
          font-size: var(--font-size-7);
          height: 3rem;
          color: var(--color-text-base);
        }
        .toggle-label {
          display: inline-block;
          position: relative;
          width: 3.5rem;
          height: 2rem;
          content: '';
          cursor: pointer;
          border-width: 0.2rem;
          border-style: solid;
          border-radius: var(--border-radius-extra-large);
          border-color: ${colorMode};
          transition: 0.1s;
        }
        .toggle-label:hover {
          border-color: ${hoverColorMode};
        }
        .toggle-label::before {
          border-width: 0rem 0rem 0.2rem 0.2rem;
          border-style: solid;
          border-color: var(--color-text-toggle-checked-icon);
          display: block;
          position: absolute;
          top: 0.7rem;
          left: 0.8rem;
          width: 0.7rem;
          height: 0.3rem;
          transform: translate3d(-50%, -50%, 0rem) rotate(-45deg);
          content: '';
          opacity: 0;
        }
        .toggle-label::after {
          content: '';
          display: block;
          position: absolute;
          top: 0.2rem;
          bottom: 0.2rem;
          left: 0.2rem;
          width: 1.2rem;
          height: 1.2rem;
          background-color: ${circleColorMode};
          border-radius: var(--border-radius-rounded);
          transition-property: left;
          transition-timing-function: ease;
          transition-duration: 0.1s;
        }
        .focused {
          outline: var(--color-outline-focused) solid 1px;
          border-radius: var(--border-radius-medium);
        }
      `}</style>
    </>
  );
};

const getCurrentSwitchColor = (isSelected: boolean, type: 'color' | 'circle' | 'hover') => {
  switch (type) {
    case 'color':
      return isSelected ? 'var(--color-border-toggle-checked)' : 'var(--color-border-toggle)';
    case 'circle':
      return isSelected
        ? 'var(--color-background-toggle-handle-checked)'
        : 'var(--color-background-toggle-handle)';
    case 'hover':
      return isSelected
        ? 'var(--color-border-toggle-checked-hover)'
        : 'var(--color-border-toggle-hover)';
    default:
      const _type: never = type;
      throw new Error(`${_type} is not type`);
  }
};
