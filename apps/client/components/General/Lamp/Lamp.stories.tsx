import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Lamp } from './Lamp';

export default {
  title: 'General/Lamp',
  component: Lamp,
} as ComponentMeta<typeof Lamp>;

const Template: ComponentStory<typeof Lamp> = (args) => <Lamp {...args} />;

export const LampLit = Template.bind({});
export const LampOff = Template.bind({});
export const LampFocus = Template.bind({});

LampLit.args = {
  isActive: true,
};

LampOff.args = {
  isActive: false,
};

LampFocus.args = {
  isActive: true,
  isFocus: true,
};
