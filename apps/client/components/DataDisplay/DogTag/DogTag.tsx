import React, { ReactElement } from 'react';

import { UsersMetadata } from '../UsersMetadata';
import { TeleleLevel } from '../TeleleLevel';
import { SquareImage } from '../SquareImage';
import { Avatar } from '../Avatar';
import { TagsRow } from '../../General/TagsRow';
import { SvgIcon } from '../../General/SvgIcon';

import { determineBlackOrWhite } from '../../../common/utils';

import EllipsisSVG from '../../../assets/images/ellipsis.svg';
interface DogTagProps {
  display_name: string;
  user_id: string;
  avatarSrc: string;
  favoriteColor: string;
  tagNames: { name: string }[];
  exp: number;
  biography?: string;
  favoriteGames?: { game_id: string; src: string }[];
}

interface UsersFavoriteGamesProps {
  favoriteGames?: { game_id: string; src: string }[];
}

const UsersFavoriteGames: React.VFC<UsersFavoriteGamesProps> = (props): ReactElement => {
  const { favoriteGames } = props;
  const SpreadGameCards = favoriteGames
    ? favoriteGames.map((game) => (
        <React.Fragment key={game.game_id}>
          <div className='game-card'>
            <SquareImage src={game.src} size='XSMALL' url={game.game_id} alt={game.game_id} />
          </div>
          <style jsx>{`
            .game-card {
              margin-right: 0.5rem;
            }
            .game-card:last-child {
              margin-right: 0;
            }
          `}</style>
        </React.Fragment>
      ))
    : null;
  return (
    <>
      <div className='users-favorite-games'>{SpreadGameCards}</div>
      <style jsx>{`
        .users-favorite-games {
          display: flex;
          position: relative;
        }
      `}</style>
    </>
  );
};

export const DogTag: React.VFC<DogTagProps> = (props): ReactElement => {
  const {
    avatarSrc,
    display_name = 'たかし',
    user_id = 'traveller',
    favoriteColor = '#666666',
    tagNames,
    exp = 0,
    biography,
    favoriteGames,
  } = props;
  const adaptColor = determineBlackOrWhite(favoriteColor);
  return (
    <>
      <div className='dog-tag-wrapper'>
        <div className='dog-tag-header' />
        <div className='ellipsis-svg mouse-over'>
          <SvgIcon svg={EllipsisSVG} size='2.5rem' color={adaptColor} />
        </div>
        <div className='dog-tag-contents'>
          <div className='first-row'>
            <div className='avatar-wrapper'>
              <Avatar src={avatarSrc} size='LARGE' user_id={user_id} />
            </div>
            <div className='users-favorite-games'>
              <UsersFavoriteGames favoriteGames={favoriteGames} />
            </div>
          </div>
          <UsersMetadata
            display_name={display_name}
            user_id={user_id}
            size='MEDIUM'
            margin='0.4rem 0 0 0'
          />
          <TagsRow
            tagNames={tagNames}
            uniqueID={user_id}
            rightGradiantEdge={38.8}
            margin='0.5rem 0 0 0'
          />

          <TeleleLevel fontSize='SMALL' exp={exp} margin='0.5rem 0 0 0' />
          <div className='users-biography'>
            <span>{biography}</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .dog-tag-contents {
          padding: 0rem 1.3rem 1rem 1.3rem;
        }
        .ellipsis-svg {
          position: relative;
          cursor: pointer;
          width: 2.5rem;
          border-radius: var(--border-radius-rounded);
          margin: 0 0.5rem 0 auto;
        }
        .first-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .dog-tag-wrapper {
          width: 40rem;
          height: 25rem;
          background-color: var(--color-card);
          box-shadow: var(--shadow-elevation-1);
          border-radius: var(--border-radius-extra-large);
          transition: 0.1s;
        }
        .dog-tag-wrapper:hover {
          box-shadow: var(--shadow-elevation-2);
        }
        .dog-tag-header {
          position: absolute;
          width: inherit;
          height: 6rem;
          background-color: ${favoriteColor};
          border-radius: var(--border-radius-extra-large) var(--border-radius-extra-large) 0 0;
        }
        .avatar-wrapper {
          z-index: var(--z-index-default);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: var(--border-radius-rounded);
          width: calc(var(--avatar-size-large) + 0.5rem);
          height: calc(var(--avatar-size-large) + 0.5rem);
          background-color: var(--color-card-avatar-primer);
        }

        .users-biography {
          height: 4.5rem;
          color: var(--color-text-base);
          overflow: hidden;
          font-size: var(--font-size-7);
        }
        .users-biography span {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </>
  );
};
