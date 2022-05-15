import React, { useRef, ReactElement } from 'react';
import { Tag, TagProps } from '../Tag';
import { useButtonReaction } from '../../../hooks';

interface ButtonTag extends TagProps {
  preventFocusOnPress?: boolean;
  onPress?: () => void;
  isSelected?: boolean;
}

export const ButtonTag: React.VFC<ButtonTag> = (props): ReactElement => {
  const { label, margin, mode, preventFocusOnPress = true, isSelected } = props;
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButtonReaction({ ...props, preventFocusOnPress }, ref);
  return (
    <>
      <button className='button-tag' ref={ref} {...buttonProps}>
        <Tag label={label} margin={margin} mode={mode} isSelected={isSelected} />
      </button>
      <style jsx>{`
        .button-tag {
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
