import React, { ReactElement } from 'react';
import { SkeletonGameCard } from '.';

export const SkeletonGameCardList: React.VFC = (): ReactElement => {
  const skeletonList: ReactElement[] = [];

  for (let i = 0; i < 50; i++) {
    skeletonList.push(<SkeletonGameCard />);
  }

  return (
    <>
      <div className='skeleton-gamecard-list-wrapper'>
        {skeletonList.map((skeleton, index) => (
          <div className='skeleton-gamecard-wrapper' key={index}>
            {skeleton}
          </div>
        ))}
      </div>

      <style jsx>{`
        .skeleton-gamecard-list-wrapper {
          display: flex;
          flex-wrap: wrap;
        }
        .skeleton-gamecard-wrapper {
          margin: 1rem 0;
        }

        @media screen and (min-width: 600px) {
          .skeleton-gamecard-list-wrapper {
            display: flex;
            flex-wrap: wrap;
          }
          .skeleton-gamecard-wrapper {
            margin: 1rem 2rem 1rem 0rem;
          }
        }
      `}</style>
    </>
  );
};
