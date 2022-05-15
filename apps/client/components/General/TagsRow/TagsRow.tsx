import React, { ReactElement } from 'react';
import { LinkTag } from '../../General/LinkTag';
import { useEndOfHorizontalScroll, useHorizontalScroll } from '../../../hooks';
/*
 *  rightGradiantEdgeはTagsRowの右端のグラデーションの位置を調節するための数値です。
 */

// TODO: Tagのスキーマが決まり次第それ使う

interface TagsRowProps {
  tagNames: { name: string }[];
  rightGradiantEdge: number;
  margin: string;
  uniqueID: string;
}

export const TagsRow: React.VFC<TagsRowProps> = (props): ReactElement => {
  const { tagNames, margin, uniqueID, rightGradiantEdge } = props;
  const [scrollRef, currentPosition] = useEndOfHorizontalScroll<HTMLDivElement>(`${uniqueID}-tags`);
  useHorizontalScroll(scrollRef);
  const SpreadTags = tagNames
    ? tagNames.map((tag) => (
        <LinkTag
          key={tag.name}
          label={tag.name}
          margin={'0.5rem 0.5rem 0 0'}
          href={tag.name}
          target='_blank'
        />
      ))
    : null;
  return (
    <>
      <div className='tags-wrapper'>
        {/* {currentPosition !== 'LEFT' ? <div className='gradient left-gradient' /> : null} */}
        <div id={`${uniqueID}-tags`} className='users-tags' role='group' ref={scrollRef}>
          {SpreadTags}
        </div>
        {/* {currentPosition !== 'RIGHT' ? <div className='gradient right-gradient' /> : null} */}
      </div>
      <style jsx>{`
        .tags-wrapper {
          display: flex;
          height: 3rem;
          margin: ${margin};
        }
        .gradient {
          position: absolute;
          content: '';
          width: 1.5rem;
          height: inherit;
          pointer-events: none;
        }
        .left-gradient {
          background: linear-gradient(
            to right,
            var(--color-card) 20%,
            var(--color-card-gradient) 80%
          );
        }
        .right-gradient {
          left: ${rightGradiantEdge}rem;
          background: linear-gradient(
            to left,
            var(--color-card) 20%,
            var(--color-card-gradient) 80%
          );
        }
        .users-tags {
          display: flex;
          overflow-x: auto;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .users-tags::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};
