import React, { ReactElement } from 'react';
import { SquareImage } from '../SquareImage';
import { TagsRow } from '../../General/TagsRow';
interface GameCardProps {
  title: string;
  tagNames: { name: string }[];
  gameId: string;
  followersQuantity?: string;
  src: string;
  url: string;
  alt: string;
}

export const GameCard: React.VFC<GameCardProps> = (props): ReactElement => {
  const { src, url, alt, title, tagNames, gameId, followersQuantity = 0 } = props;
  return (
    <>
      <div className='game-card-wrapper'>
        <div>
          <SquareImage src={src} url={url} alt={alt} size='SMALL' />
        </div>
        <div className='right-column'>
          <a href={url} title={title}>
            <h2 className='game-card-title'>{title}</h2>
          </a>
          <div className='game-card-help-text'>
            <span className='help-text-number'>{followersQuantity}</span>
            <span className='help-text-label'> フォロワー</span>
          </div>
          <TagsRow
            tagNames={tagNames}
            uniqueID={gameId}
            rightGradiantEdge={38}
            margin='0.5rem 0 0 0'
          />
        </div>
      </div>
      <style jsx>{`
        .game-card-wrapper {
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
        .game-card-wrapper:hover {
          box-shadow: var(--shadow-elevation-2);
        }
        .game-card-title {
          width: 18.5rem;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          color: var(--color-text-base);
          line-height: var(--line-height-body);
          font-size: var(--font-size-5);
          transition: 0.1s;
        }
        .game-card-title:hover {
          color: var(--color-telele-orange);
        }
        .game-card-help-text {
          font-size: var(--font-size-5);
          color: var(--color-text-alt);
        }
        .help-text-number {
          font-weight: var(--font-weight-bold);
        }
        .help-text-label {
          font-weight: var(--font-weight-normal);
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
