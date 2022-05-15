import React, { ReactElement, ReactNode } from 'react';

type VerticalOrientation = 'TOP' | 'BOTTOM';
type HorizontalOrientation = 'LEFT' | 'RIGHT';
type AnchorOrigin = 'TL' | 'TR' | 'BL' | 'BR';

interface BadgeProps {
  children: ReactNode;
  backgroundColor?: string;
  fontColor?: string;
  badgeContent: number;
  anchorOrigin?: AnchorOrigin;
  max?: number;
}

const Vertical: {
  [key in VerticalOrientation]: {
    POSITION_Y: string;
    TRANSLATE_Y: number;
  };
} = {
  TOP: {
    POSITION_Y: 'top',
    TRANSLATE_Y: -50,
  },
  BOTTOM: {
    POSITION_Y: 'bottom',
    TRANSLATE_Y: 50,
  },
} as const;

const Horizontal: {
  [key in HorizontalOrientation]: {
    POSITION_X: string;
    TRANSLATE_X: number;
  };
} = {
  LEFT: {
    POSITION_X: 'left',
    TRANSLATE_X: -50,
  },
  RIGHT: {
    POSITION_X: 'right',
    TRANSLATE_X: 50,
  },
} as const;

export const Badge: React.VFC<BadgeProps> = ({
  children,
  backgroundColor = 'var(--color-red-9)',
  fontColor = 'var(--color-white)',
  badgeContent,
  anchorOrigin = 'TR',
  max = 9,
}): ReactElement => {
  const badgeContentCount = badgeContent > max ? `${max}+` : `${badgeContent}`;
  const showBadge = badgeContent > 0;
  const direction = determineDirection(anchorOrigin);
  return (
    <>
      <span className='badge-root'>
        {children}
        {showBadge ? <span className='badge'>{badgeContentCount}</span> : null}
      </span>
      <style jsx>{`
        .badge-root {
          position: relative;
          display: inline-flex;
          vertical-align: middle;
          flex-shrink: 0;
        }
        .badge {
          position: absolute;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          font-size: 1rem;
          min-width: 2rem;
          line-height: 1;
          height: 2rem;
          border-radius: var(--border-radius-rounded);
          background-color: ${backgroundColor};
          z-index: var(--z-index-default);
          color: ${fontColor};
          ${direction.VERTICAL.POSITION_Y}: 0px;
          ${direction.HORIZONTAL.POSITION_X}: 0px;
          transform: scale(1)
            translate(${direction.HORIZONTAL.TRANSLATE_X}%, ${direction.VERTICAL.TRANSLATE_Y}%);
          transform-origin: 0% 100%;
        }
      `}</style>
    </>
  );
};

const determineDirection = (anchorOrigin: AnchorOrigin) => {
  switch (anchorOrigin) {
    case 'TL':
      return { VERTICAL: Vertical.TOP, HORIZONTAL: Horizontal.LEFT } as const;
    case 'TR':
      return { VERTICAL: Vertical.TOP, HORIZONTAL: Horizontal.RIGHT } as const;
    case 'BL':
      return { VERTICAL: Vertical.BOTTOM, HORIZONTAL: Horizontal.LEFT } as const;
    case 'BR':
      return { VERTICAL: Vertical.BOTTOM, HORIZONTAL: Horizontal.RIGHT } as const;
    default:
      const _anchorOrigin: never = anchorOrigin;
      throw new Error(`${_anchorOrigin} is not Anchor Origin`);
  }
};
