import React from 'react';
import { SvgIcon } from '../SvgIcon';
import close from '../../../assets/images/close.svg';

type TagMode = 'tag' | 'remove';

export interface TagProps {
  label: string;
  mode?: TagMode;
  margin?: string;
  isSelected?: boolean;
}

export const Tag: React.VFC<TagProps> = (props) => {
  const { label, mode = 'tag', margin = '0', isSelected = true } = props;
  const SetEachSvgs = {
    tag: null,
    remove: <SvgIcon size={'1.9rem'} color={'var(--color-grey-7)'} svg={close} />,
  };
  const currentStyle = isSelected ? 'tag--filled' : 'tag--outlined';
  return (
    <>
      <div className={['tag', currentStyle].join(' ')}>
        <span className='tag-label'>{label}</span>
        {SetEachSvgs[mode]}
      </div>
      <style jsx>{`
        .tag {
          display: flex;
          align-items: center;
          float: left;
          border: 2px solid var(--color-border-tag);
          border-radius: var(--border-radius-extra-large);
          box-sizing: border-box;
          height: 2.3rem;
          padding: 0 1.2rem;
          cursor: pointer;
          user-select: none;
          margin: ${margin};
          white-space: nowrap;
        }
        .tag-label {
          font-size: var(--font-size-7);
          font-weight: var(--font-weight-bold);
        }
        .tag--filled {
          color: var(--color-text-tag-filled);
          background-color: var(--color-background-tag);
        }
        .tag--outlined {
          color: var(--color-text-tag-outlined);
          background: none;
        }
        .tag--filled:hover {
          background-color: var(--color-background-tag-hover);
        }
        .tag--outlined:hover {
          border: 2px solid var(--color-border-tag-hover);
          color: var(--color-text-tag-outlined-hover);
        }
      `}</style>
    </>
  );
};
