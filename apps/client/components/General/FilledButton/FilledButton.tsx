import React, { ReactElement, useRef } from 'react';

import { useButtonReaction } from '../../../hooks';

const Size = {
  SMALL: 'small',
  LARGE: 'large',
};

const BorderRadius = {
  SUPER: '--border-radius-super-mega-extra-large',
  DEFAULT: '--border-radius-extra-large',
};

interface FilledButtonProps {
  size: keyof typeof Size;
  borderRadius?: keyof typeof BorderRadius;
  label: string;
  onPress?: () => void;
  preventFocusOnPress?: boolean;
  isDisabled?: boolean;
}

export const FilledButton: React.VFC<FilledButtonProps> = (props): ReactElement => {
  const {
    size,
    label,
    borderRadius = 'DEFAULT',
    isDisabled = false,
    preventFocusOnPress = true,
  } = props;
  const buttonStyle = isDisabled ? 'color-filled-button-disabled ' : 'color-filled-button';

  const ref = useRef<HTMLButtonElement>(null);
  /**
   * preventFocusOnPressがデフォルトでfalseになっています。
   * クリックするたびにfocusされてしまうのでtrueを渡しています。
   * AdobeのuseButtonの型にプロパティが無いため渡せません。
   */
  const { buttonProps } = useButtonReaction({ ...props, preventFocusOnPress }, ref);
  return (
    <>
      <button
        className={`filled-button ${buttonStyle} filled-button--${Size[size]} }`}
        {...buttonProps}
        ref={ref}
      >
        <span>{label}</span>
      </button>

      <style jsx>{`
        .filled-button {
          width: 100%;
          border-radius: var(${BorderRadius[borderRadius]});
          font-weight: var(--font-weight-bold);
          border: none;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          transition: 0.1s;
          user-select: none;
        }
        .filled-button--large {
          font-size: var(--button-text-large);
          height: var(--button-size-large);
        }
        .filled-button--small {
          font-size: var(--button-text-small);
          height: var(--button-size-small);
        }
        .color-filled-button {
          background-color: var(--color-background-button-filled);
          color: var(--color-text-button-filled);
          cursor: pointer;
        }
        .color-filled-button-disabled {
          background-color: var(--color-background-button-disabled);
          color: var(--color-text-button-disabled);
          cursor: not-allowed;
        }
        .color-filled-button:hover {
          background-color: var(--color-background-button-filled-hover);
        }
        .color-filled-button:active {
          background-color: var(--color-background-button-filled-active);
        }
      `}</style>
    </>
  );
};
