import React, { ReactElement, useState } from 'react';
import { LinkTag } from '../../General/LinkTag';
import { ButtonAvatar } from '../ButtonAvatar';
import { TeleleLevel } from '../TeleleLevel';
import { ModalOverlay } from '../ModalOverlay';
import { SvgIcon } from '../../General/SvgIcon';
import { determineSocialMediaLink } from '../../../common/utils';
interface ProfileUsersMetadataProps {
  display_name: string;
  user_id: string;
}

const ProfileUsersMetadata: React.VFC<ProfileUsersMetadataProps> = (props): ReactElement => {
  const { display_name, user_id } = props;
  return (
    <>
      <div className='users-metadata'>
        <p className={'display-name'}>{display_name}</p>
        <p className='user-id font-metadata'>@{user_id}</p>
      </div>
      <style jsx>{`
        .users-metadata {
          margin: 0.5rem 0 0 0;
        }
        .display-name {
          margin: 0;
          overflow-wrap: break-word;
          color: var(--color-text-base);
          font-weight: var(--font-weight-bold);
          line-height: var(--line-height-heading);
          font-size: var(--font-size-4);
        }
        .user-id {
          margin: 0;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          color: var(--color-text-alt);
          line-height: var(--line-height-heading);
          font-size: var(--font-size-7);
        }
      `}</style>
    </>
  );
};

interface ProfileContent {
  label: string;
  typography: string;
}

const ProfileContent: React.VFC<ProfileContent> = (props): ReactElement => {
  const { label, typography } = props;
  return (
    <>
      <article>
        <h5 className='profile-content-label'>{label}</h5>
        <p className='profile-content-typography'>{typography}</p>
      </article>
      <style jsx>{`
        .profile-content-label {
          margin: 2rem 0 0 0;
          color: var(--color-text-alt);
          font-size: var(--font-size-6);
        }
        .profile-content-typography {
          margin: 0.5rem 0 0 0;
          white-space: pre-wrap;
          color: var(--color-text-base);
          font-size: var(--font-size-6);
        }
      `}</style>
    </>
  );
};

interface AnchorLinkSVGProps {
  svg: React.FC<React.SVGProps<SVGElement>>;
  href: string;
  label: string;
}

const AnchorLinkSVG: React.VFC<AnchorLinkSVGProps> = (props): ReactElement => {
  const { svg, href, label } = props;
  const [isHover, setIsHover] = useState<boolean>(false);
  const SvgIconColor = isHover
    ? 'var(--color-fill-button-icon-hover)'
    : 'var(--color-fill-button-icon)';
  return (
    <>
      <a
        className='anchor-link-svg-wrapper'
        href={href}
        target={'_blank'}
        rel='noreferrer'
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        aria-label={href}
      >
        <SvgIcon svg={svg} size={'2rem'} color={SvgIconColor} />
        <p className='anchor-link-svg-label'>{label}</p>
      </a>
      <style jsx>{`
        .anchor-link-svg-wrapper {
          display: flex;
          align-items: center;
          padding-right: 0.5rem;
        }
        .anchor-link-svg-label {
          margin: 0;
          color: ${SvgIconColor};
          padding-left: 0.3rem;
        }
      `}</style>
    </>
  );
};

interface ProfileProps {
  display_name: string;
  user_id: string;
  favoriteColor: string;
  avatarSrc: string;
  socialMediaLinks?: { url: string; label: string }[];
  tags?: { key: string }[];
  exp: number;
  biography?: string;
  birthday?: string;
  gender?: string;
  coretime?: string;
}

export const Profile: React.VFC<ProfileProps> = (props): ReactElement => {
  const {
    display_name,
    user_id,
    favoriteColor = '#666666',
    avatarSrc,
    socialMediaLinks,
    tags,
    exp,
    biography,
    gender,
    birthday,
    coretime,
  } = props;
  const [avatarModalOpen, setAvatarModalOpen] = useState<boolean>(false);
  const SpreadTags = tags
    ? tags.map((tag) => (
        <LinkTag
          key={tag.key}
          label={tag.key}
          margin={'0.5rem 0.5rem 0 0'}
          href='https://twitter.com'
          target='_blank'
        />
      ))
    : null;
  const SpreadUrls = socialMediaLinks
    ? socialMediaLinks.map((socialMediaLink, i) => (
        <React.Fragment key={i}>
          <div className='anchor-link-svg-wrapper'>
            <AnchorLinkSVG
              href={socialMediaLink.url}
              svg={determineSocialMediaLink(socialMediaLink.url)}
              label={socialMediaLink.label}
            />
          </div>
          <style jsx>{`
            .anchor-link-svg-wrapper {
              margin: 1rem 0.5rem 0 0;
            }
          `}</style>
        </React.Fragment>
      ))
    : null;
  return (
    <>
      {avatarModalOpen ? (
        <ModalOverlay setModalOpen={setAvatarModalOpen}>
          <img src='images/kasikoma.jpg' alt={`${user_id}のアバター`} />
        </ModalOverlay>
      ) : null}
      <div className='profile-wrapper'>
        <div className='profile-header' />
        <div className='profile-contents'>
          <div className='avatar-wrapper'>
            <ButtonAvatar
              src={avatarSrc}
              user_id={user_id}
              ariaLabel={`プロフィール画像を開きます`}
              size='LARGE'
              onPress={() => setAvatarModalOpen(true)}
            />
          </div>
          <ProfileUsersMetadata display_name={display_name} user_id={user_id} />
          <div className='promotion-url-list'>{SpreadUrls}</div>
          <div className='tag-list'>{SpreadTags}</div>
          <TeleleLevel fontSize='MEDIUM' exp={exp} margin='0.5rem 0 0 0' />
          <div className='about-me'>
            {biography ? <ProfileContent label='自己紹介' typography={biography} /> : null}
            {birthday ? <ProfileContent label='誕生日' typography={birthday} /> : null}
            {gender ? <ProfileContent label='性別' typography={gender} /> : null}
            {coretime ? <ProfileContent label='プレイする時間帯' typography={coretime} /> : null}
          </div>
        </div>
      </div>
      <style jsx>{`
        .profile-wrapper {
          width: 100vw;
          background-color: var(--color-card);
        }
        .profile-contents {
          position: relative;
          z-index: var(--z-index-default);
          padding: 5.5rem 1.3rem 1rem 1.3rem;
        }
        .profile-header {
          position: absolute;
          width: inherit;
          height: 9rem;
          background-color: ${favoriteColor};
        }
        .avatar-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: var(--border-radius-rounded);
          width: calc(var(--avatar-size-large) + 0.5rem);
          height: calc(var(--avatar-size-large) + 0.5rem);
          background-color: var(--color-card-avatar-primer);
        }
        .tag-list {
          margin: 0.5rem 0 0 0;
          overflow: auto;
        }
        .promotion-url-list {
          display: flex;
          overflow: auto;
          flex-wrap: wrap;
        }
        @media screen and (min-width: 600px) {
          .profile-wrapper {
            width: 68rem;
            background-color: var(--color-card);
            border-radius: var(--border-radius-extra-large);
          }
          .profile-contents {
            position: relative;
            z-index: var(--z-index-default);
            padding: 5.5rem 1.3rem 1rem 1.3rem;
          }
          .profile-header {
            position: absolute;
            width: inherit;
            height: 9rem;
            background-color: ${favoriteColor};
            border-radius: var(--border-radius-extra-large) var(--border-radius-extra-large) 0 0;
          }
        }
      `}</style>
    </>
  );
};
