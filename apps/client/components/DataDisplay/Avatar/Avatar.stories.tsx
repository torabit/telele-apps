import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';

export default {
  title: 'DataDisplay/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const XLarge = Template.bind({});
export const Large = Template.bind({});
export const Medium = Template.bind({});
export const Small = Template.bind({});

XLarge.args = {
  src: 'images/kasikoma.jpg',
  size: 'XLARGE',
  user_id: 'sunsea',
};

Large.args = {
  src: 'images/kasikoma.jpg',
  size: 'LARGE',
  user_id: 'sunsea',
};

Medium.args = {
  src: 'images/sakura.png',
  size: 'MEDIUM',
  user_id: 'yusagi',
};

Small.args = {
  src: 'images/cow.png',
  size: 'SMALL',
  user_id: 'torabit',
};
