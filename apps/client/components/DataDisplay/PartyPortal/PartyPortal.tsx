import React, { ReactElement } from 'react';
import { Avatar } from '../Avatar';
import { Lamp } from '../../General/Lamp';
import { TagsRow } from '../../General/TagsRow';

// tagのスキーマが決まり次第それを使う
// party_portalのスキーマが決まり次第それを使う
interface PartyPortalProps {
  party_id: string;
  party_name: string;
  maximum_party_members: number;
  current_party_members: number;
  src: string;
  user_id: string;
  game_id: string;
  game_title: string;
  tagNames: { name: string }[];
}

export const PartyPortal: React.VFC<PartyPortalProps> = (props): ReactElement => {
  const {
    src,
    user_id,
    party_id,
    party_name,
    game_id,
    game_title,
    tagNames,
    maximum_party_members,
    current_party_members,
  } = props;

  const isFullParty = current_party_members !== maximum_party_members;

  return (
    <>
      <div className='party-portal-wrapper'>
        <div className='party-portal-contents'>
          <div className='first-column'>
            <Avatar src={src} size='XLARGE' user_id={user_id} />
          </div>
          <div className='second-column'>
            <a href={party_id}>
              <p className='party-name' title={party_name}>
                {party_name}
              </p>
            </a>
            <a href={game_id}>
              <p className='game-title'>{game_title}</p>
            </a>
            <TagsRow
              tagNames={tagNames}
              uniqueID={party_id}
              rightGradiantEdge={39.1}
              margin='1.5rem 0 0 0'
            />
          </div>
          <div className='third-column'>
            <div className='lamp-wrapper'>
              <Lamp isActive={isFullParty} />
            </div>
            <div className='display-party-capacity-wrapper'>
              <p className='display-party-capacity'>{`${current_party_members}/${maximum_party_members}`}</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .party-portal-wrapper {
          padding: 0.5rem;
          width: 45rem;
          height: 10.6rem;
          background-color: var(--color-card);
          box-shadow: var(--shadow-elevation-1);
          border-radius: var(--border-radius-extra-large);
        }
        .party-portal-wrapper:hover {
          box-shadow: var(--shadow-elevation-2);
        }
        .party-portal-contents {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .party-name {
          margin: 0;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          color: var(--color-text-base);
          font-size: var(--font-size-5);
          font-weight: var(--font-weight-bold);
          cursor: pointer;
        }
        .party-name:hover {
          text-decoration: underline;
        }
        .game-title {
          margin: 0 0 0 0.2rem;
          color: var(--color-telele-orange);
          font-size: var(--font-size-6);
          font-weight: var(--font-weight-bold);
          cursor: pointer;
        }
        .game-title:hover {
          text-decoration: underline;
        }
        .second-column {
          display: flex;
          flex-direction: column;
          width: 29rem;
          margin-left: 0.5rem;
        }
        .third-column {
          display: flex;
          align-items: flex-end;
          flex-direction: column;
          width: 35rem;
        }
        .display-party-capacity {
          margin: 0rem;
          color: var(--color-telele-orange);
          font-size: var(--font-size-6);
          font-weight: var(--font-weight-bold);
        }
        .display-party-capacity-wrapper {
          margin-top: 5.7rem;
        }
      `}</style>
    </>
  );
};
