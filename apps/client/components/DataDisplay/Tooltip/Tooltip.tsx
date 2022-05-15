import React, { ReactElement, ReactNode, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';
import { followCursor } from 'tippy.js';
interface TooltipProps {
  children: ReactNode;
  content?: string;
  isDisabled?: boolean;
  posY?: number;
  posX?: number;
  followCursorState?: boolean | 'initial' | 'horizontal' | 'vertical';
}

export const Tooltip: React.VFC<TooltipProps> = (props): ReactElement => {
  const {
    children,
    content = null,
    isDisabled = false,
    posY = 5,
    posX = 0,
    followCursorState = false,
  } = props;
  const referenceRef = useRef<HTMLSpanElement>(null);
  return (
    <>
      <span ref={referenceRef}>{children}</span>
      <Tippy
        render={(attrs) => (
          <div className='tippy-popper' tabIndex={-1} {...attrs}>
            {content}
          </div>
        )}
        popperOptions={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [posX, posY],
              },
            },
          ],
        }}
        reference={referenceRef}
        disabled={isDisabled}
        placement='bottom'
        followCursor={followCursorState}
        plugins={[followCursor]}
      />
      <style jsx>{`
        .tippy-popper {
          margin: 0rem;
          background-color: var(--color-background-tooltip);
          border-radius: var(--border-radius-medium);
          color: var(--color-text-tooltip);
          padding: 0.4rem 0.8rem;
          font-size: 1rem;
          max-width: 30rem;
          margin: 0.2rem;
          overflow-wrap: break-word;
          font-weight: var(--font-weight-semibold);
          animation-name: popperAnimation;
          animation-duration: 200ms;
          animation-delay: 200ms;
          animation-fill-mode: forwards;
          opacity: 0;
        }
        @keyframes popperAnimation {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};
