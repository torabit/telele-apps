import React, { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SideNavCardProps {
  display_name: string;
  user_id: string;
  src: string;
}
interface AvatarProps {
  src: string;
}
interface MetadataProps {
  display_name: string;
  user_id: string;
}

const SideNavCardAvatar: React.VFC<AvatarProps> = ({ src }): ReactElement => {
  return (
    <>
      <div className='side-nav-card-avatar-wrapper'>
        <div className='side-nav-card-avatar'>
          <Image src={src} layout='fill' objectFit='contain' />
        </div>
      </div>
      <style jsx>{`
        .side-nav-card-avatar-wrapper {
          user-select: none;
          border-radius: var(--border-radius-rounded);
          width: 3rem;
          height: 3rem;
        }
        .side-nav-card-avatar {
          position: relative;
          overflow: hidden;
          border-radius: var(--border-radius-rounded);
          width: inherit;
          height: inherit;
        }
      `}</style>
    </>
  );
};

const SideNavCardUsersMetadata: React.VFC<MetadataProps> = ({
  display_name,
  user_id,
}): ReactElement => {
  return (
    <>
      <div className='side-nav-card-users-metadata-wrapper'>
        <p className='core-text-display-name'>{display_name}</p>
        <p className='core-text-user-id'>@{user_id}</p>
      </div>
      <style jsx>{`
        .side-nav-card-users-metadata-wrapper {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          margin-left: 1rem;
          width: 100%;
        }
        .core-text-display-name {
          margin: 0;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          color: var(--color-text-base);
          font-weight: var(--font-weight-bold);
          line-height: var(--line-height-heading);
          font-size: var(--font-size-7);
        }
        .core-text-user-id {
          margin: 0;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          color: var(--color-text-alt);
          line-height: var(--line-height-heading);
          font-size: var(--font-size-8);
        }
      `}</style>
    </>
  );
};

export const SideNavCard: React.VFC<SideNavCardProps> = ({
  display_name,
  user_id,
  src,
}): ReactElement => {
  return (
    <>
      <Link href={`/${user_id}`}>
        <div className='side-nav-card mouse-over'>
          <SideNavCardAvatar src={src} />
          <SideNavCardUsersMetadata display_name={display_name} user_id={user_id} />
        </div>
      </Link>

      <style jsx>{`
        .side-nav-card {
          display: flex;
          padding: 0.5rem 1rem;
          height: 4.2rem;
          cursor: pointer;
          width: 100%;
        }
      `}</style>
    </>
  );
};
