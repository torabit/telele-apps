import React, { ReactElement } from 'react';
import { Skeleton, SkeletonText } from '../Skeleton';

interface SkeletonGameCardProps {
  isLoading?: boolean;
}

export const SkeletonGameCard: React.VFC<SkeletonGameCardProps> = (props): ReactElement => {
  const { isLoading } = props;
  return (
    <>
      <div className='dummy-game-card-wrapper'>
        <div className='dummy-square-image'>
          <Skeleton isLoading={isLoading} height='10rem' />
        </div>
        <div className='right-column'>
          <SkeletonText isLoading={isLoading} noOfLines={3} spacing='23' />
        </div>
      </div>
      <style jsx>{`
        .dummy-game-card-wrapper {
          display: flex;
          align-items: center;
          width: 32.4rem;
          height: 13rem;
          background-color: var(--color-card);
          box-shadow: var(--shadow-elevation-1);
          border-radius: var(--border-radius-extra-large);
          padding: 1.5rem;
          transition: 0.1s;
        }
        .dummy-square-image {
          border-radius: var(--border-radius-extra-large);
          width: 10rem;
          height: 10rem;
        }
        .right-column {
          display: flex;
          flex-direction: column;
          width: 18.5rem;
          margin-left: 1.5rem;
        }
      `}</style>
    </>
  );
};
