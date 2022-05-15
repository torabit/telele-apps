import React from 'react';
import { Avatar, AvatarProps } from '../Avatar';
import { TargetType } from '../../../types/html';

interface LinkAvatar extends AvatarProps {
  href: string;
  target?: TargetType;
}

export const LinkAvatar: React.VFC<LinkAvatar> = (props) => {
  const { src, size, user_id, href, hasInteraction, target = '_self' } = props;
  return (
    <a href={href} target={target}>
      <Avatar src={src} size={size} user_id={user_id} hasInteraction={hasInteraction} />
    </a>
  );
};
