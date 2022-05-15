import React, { useRef, ReactElement } from 'react';
import { useButtonReaction } from '../../../hooks';

const Size = {
  SMALL: 'small',
  LARGE: 'large',
};

interface OutlinedButtonProps {
  size: keyof typeof Size;
  label: string;
  onPress?: () => void;
  preventFocusOnPress?: boolean;
  isDisabled?: boolean;
}

export const OutlinedButton: React.FC<OutlinedButtonProps> = (props): ReactElement => {
  const { label, size, preventFocusOnPress = true } = props;
  const ref = useRef<HTMLButtonElement>(null);
  /*
   * preventFocusOnPressがデフォルトでfalseになっています。
   * クリックするたびにfocusされてしまうのでtrueを渡しています。
   * AdobeのuseButtonの型にプロパティが無いため渡せません。
   */
  const { buttonProps } = useButtonReaction({ ...props, preventFocusOnPress }, ref);
  return (
    <>
      <button
        className={`outlined-button outlined-button--${Size[size]} outlined-button-color`}
        {...buttonProps}
        ref={ref}
      >
        <span>{label}</span>
      </button>

      <style jsx>{`
        .outlined-button {
          width: 100%;
          border-radius: var(--border-radius-extra-large);
          background-color: var(--color-background-button-outlined);
          font-weight: var(--font-weight-bold);
          border: 2px solid;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          cursor: pointer;
          transition: 0.1s;
          user-select: none;
        }
        .outlined-button--large {
          font-size: var(--button-text-large);
          height: var(--button-size-large);
        }
        .outlined-button--small {
          font-size: var(--button-text-small);
          height: var(--button-size-small);
        }
        .outlined-button-color {
          border-color: var(--color-border-button-outlined);
          color: var(--color-text-button-outlined);
        }
        .outlined-button-color:hover {
          border-color: var(--color-border-button-outlined-hover);
          color: var(--color-text-button-outlined-hover);
        }
        .outlined-button-color:active {
          border-color: var(--color-border-button-outlined-active);
          color: var(--color-text-button-outlined-active);
        }
      `}</style>
    </>
  );
};
