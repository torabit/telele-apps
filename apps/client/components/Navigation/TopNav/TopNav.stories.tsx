import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TopNav } from './TopNav';
import { RecoilRoot } from 'recoil';

export default {
  title: 'Navigation/TopNav',
  component: TopNav,
} as ComponentMeta<typeof TopNav>;

const Template: ComponentStory<typeof TopNav> = (args) => (
  <RecoilRoot>
    <TopNav {...args} />
  </RecoilRoot>
);

export const registeredUser = Template.bind({});
export const unregisteredUser = Template.bind({});

registeredUser.args = {
  user_avatar: 'images/kasikoma.jpg',
  user_id: 'sunsea',
  display_name: 'SUNSEA',
  isLoggedIn: true,
};

unregisteredUser.args = {
  isLoggedIn: false,
};
