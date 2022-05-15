import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SideNav } from './SideNav';

export default {
  title: 'Navigation/SideNav',
  component: SideNav,
} as ComponentMeta<typeof SideNav>;

const Template: ComponentStory<typeof SideNav> = (args) => <SideNav {...args} />;

export const registeredUser = Template.bind({});
export const unregisteredUser = Template.bind({});

registeredUser.args = {};

unregisteredUser.args = {};
