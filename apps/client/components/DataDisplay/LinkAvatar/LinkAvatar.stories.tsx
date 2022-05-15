import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkAvatar } from './LinkAvatar';

export default {
  title: 'DataDisplay/LinkAvatar',
  component: LinkAvatar,
} as ComponentMeta<typeof LinkAvatar>;

const Template: ComponentStory<typeof LinkAvatar> = (args) => <LinkAvatar {...args} />;

export const LinkedTwitterAvatar = Template.bind({});

LinkedTwitterAvatar.args = {
  src: 'images/kasikoma.jpg',
  size: 'XLARGE',
  user_id: 'sunsea',
  href: 'https://twitter.com/',
  target: '_blank',
};
