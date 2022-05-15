import React, { ReactElement } from 'react';

interface LampProps {
  isActive: boolean;
  isFocus?: boolean;
}

export const Lamp: React.VFC<LampProps> = (props): ReactElement => {
  const { isActive, isFocus = false } = props;
  const lampColor = isActive ? 'var(--color-green)' : 'var(--color-grey-8)';
  const borderColor = isFocus ? 'var(--color-telele-orange-9)' : null;
  return (
    <>
      <div className='lamp' />
      <style jsx>{`
        .lamp {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: var(--border-radius-rounded);
          background-color: ${lampColor};
          border: solid 2px ${borderColor};
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
};
