import React from 'react';
import Link from 'next/link';
import { useHover } from '../../../hooks';

const DisplayNameSizes = {
  SMALL: 'var(--font-size-7)',
  MEDIUM: 'var(--font-size-5)',
  LARGE: 'var(--font-size-3)',
} as const;

interface UsersMetadataProps {
  display_name: string;
  user_id: string;
  size: keyof typeof DisplayNameSizes;
  margin: string;
}

export const UsersMetadata: React.VFC<UsersMetadataProps> = ({
  display_name,
  user_id,
  size,
  margin,
}) => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  const mode = isHovered ? 'enter-mouse-detector' : null;
  return (
    <>
      <Link href={`/${user_id}`}>
        <div className='users-metadata-wrapper' ref={hoverRef}>
          <a>
            <p className={['display-name', mode].join(' ')}>{display_name}</p>
            <p className='user-id font-metadata'>@{user_id}</p>
          </a>
        </div>
      </Link>
      <style jsx>{`
        .users-metadata-wrapper {
          margin: ${margin};
          width: 100%;
          cursor: pointer;
        }
        .enter-mouse-detector {
          text-decoration: underline;
        }
        .display-name {
          margin: 0;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          color: var(--color-text-base);
          font-weight: var(--font-weight-bold);
          line-height: var(--line-height-heading);
          font-size: ${DisplayNameSizes[size]};
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
