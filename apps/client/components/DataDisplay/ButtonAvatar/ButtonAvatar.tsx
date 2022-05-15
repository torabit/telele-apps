import React, { ReactElement, useRef } from 'react';
import { Avatar, AvatarProps } from '../Avatar';
import { useButtonReaction } from '../../../hooks';

interface ButtonAvatar extends AvatarProps {
  ariaLabel?: string;
  onPress?: () => void;
  preventFocusOnPress?: boolean;
}

export const ButtonAvatar: React.VFC<ButtonAvatar> = (props): ReactElement => {
  const { ariaLabel, src, size, user_id, hasInteraction, preventFocusOnPress = true } = props;
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButtonReaction({ ...props, preventFocusOnPress }, ref);

  return (
    <>
      <button className='button-avatar' aria-label={ariaLabel} {...buttonProps}>
        <Avatar src={src} size={size} user_id={user_id} hasInteraction={hasInteraction} />
      </button>
      <style jsx>{`
        .button-avatar {
          background: none;
          border: none;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          user-select: none;
        }
      `}</style>
    </>
  );
};
