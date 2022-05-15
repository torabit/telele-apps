import React from 'react';
import { Orientation } from '../../../types/shared';

interface DividerProps {
  orientation?: Orientation;
  color?: string;
  weight?: number;
  opacity?: number;
  margin?: number;
}

export const Divider: React.VFC<DividerProps> = ({
  orientation = 'horizontal',
  color = 'var(--color-grey-7)',
  weight = 0.1,
  opacity = 0.6,
  margin = 0.8,
}) => {
  return (
    <>
      <hr aria-orientation={orientation} className={orientation} />
      <style jsx>{`
        .horizontal {
          opacity: ${opacity};
          border-width: 0rem 0rem ${weight}rem;
          border-color: ${color};
          border-style: solid;
          width: 100%;
          margin: ${margin}rem 0;
        }
        .vertical {
          opacity: ${opacity};
          border-width: 0rem 0rem 0rem ${weight}rem;
          border-color: ${color};
          border-style: solid;
          height: 100%;
          margin: 0 ${margin}rem;
        }
      `}</style>
    </>
  );
};
