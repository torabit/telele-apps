import React from 'react';
import Image from 'next/image';

export const AvatarSizes = {
  XSMALL: 'var(--avatar-size-xsmall)',
  SMALL: 'var(--avatar-size-small)',
  MEDIUM: 'var(--avatar-size-medium)',
  LARGE: 'var(--avatar-size-large)',
  XLARGE: 'var(--avatar-size-xlarge)',
} as const;

export interface AvatarProps {
  src: string;
  size: keyof typeof AvatarSizes;
  user_id: string;
  hasInteraction?: boolean;
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { src, size, user_id, hasInteraction = true } = props;
  const cursorProperty = hasInteraction ? 'pointer' : 'default';
  return (
    <>
      <div className='avatar'>
        <Image
          alt={`${user_id}のアバター`}
          role='link'
          aria-hidden={true}
          src={src}
          layout='fill'
          objectFit='contain'
        />
        {hasInteraction ? <div className='avatar-interaction mouse-over' /> : null}
      </div>
      <style jsx>{`
        .avatar-interaction {
          position: absolute;
          width: inherit;
          height: inherit;
        }
        .avatar {
          position: relative;
          overflow: hidden;
          border-radius: var(--border-radius-rounded);
          user-select: none;
          width: ${AvatarSizes[size]};
          height: ${AvatarSizes[size]};
          cursor: ${cursorProperty};
        }
      `}</style>
    </>
  );
};
