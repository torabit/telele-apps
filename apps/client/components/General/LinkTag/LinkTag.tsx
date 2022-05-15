import React, { ReactElement } from 'react';
import { Tag, TagProps } from '../Tag';
import { TargetType } from '../../../types/html';

interface LinkTagProps extends Omit<TagProps, 'mode'> {
  href: string;
  target?: TargetType;
}

export const LinkTag: React.VFC<LinkTagProps> = (props): ReactElement => {
  const { href, target = '_self', label, margin } = props;
  return (
    <a href={href} target={target}>
      <Tag label={label} margin={margin} mode='tag' />
    </a>
  );
};
