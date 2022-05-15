import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { SvgIcon } from '../../General/SvgIcon/SvgIcon';
import EllipsisSVG from '../../../assets/images/ellipsis.svg';

export default {
  title: 'DataDisplay/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => {
  return (
    <Tooltip {...args}>
      <SvgIcon svg={EllipsisSVG} size={'5rem'} color={'var(--color-telele-orange'} />
    </Tooltip>
  );
};

export const defaultTooltip = Template.bind({});

defaultTooltip.args = {
  content: 'その他',
};
