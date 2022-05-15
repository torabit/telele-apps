import React, { ReactElement, useRef } from 'react';
import { useButtonReaction } from '../../../hooks';
import { SvgIcon } from '../SvgIcon';

interface DotFrameButtonProps {
  label: string;
  svg: React.VFC<React.SVGProps<SVGElement>>;
  ariaLabel?: string;
  onPress?: () => void;
  preventFocusOnPress?: boolean;
}

export const DotFrameButton: React.VFC<DotFrameButtonProps> = (props): ReactElement => {
  const { ariaLabel, label, svg, preventFocusOnPress = true } = props;
  const ref = useRef<HTMLButtonElement>(null);

  const { buttonProps } = useButtonReaction({ ...props, preventFocusOnPress }, ref);
  return (
    <>
      <button
        className='dot-frame-button-wrapper'
        aria-label={ariaLabel}
        {...buttonProps}
        ref={ref}
      >
        <SvgIcon size='3rem' color='var(--color-grey-8)' svg={svg} />
        <p className='dot-frame-button-label'>{label}</p>
      </button>
      <style jsx>{`
        .dot-frame-button-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40rem;
          height: 25rem;
          box-shadow: var(--shadow-elevation-2);
          border: 1px dashed var(--color-border-dashed-button);
          border-radius: var(--border-radius-extra-large);
          transition: 0.1s;
          background: none;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          user-select: none;
          cursor: pointer;
        }
        .dot-frame-button-label {
          color: var(--color-text-alt);
          font-size: var(--font-size-5);
          font-weight: var(--font-weight-bold);
          margin-left: 1rem;
        }
        .dot-frame-button-wrapper:active {
          box-shadow: var(--shadow-elevation-1);
        }
      `}</style>
    </>
  );
};
