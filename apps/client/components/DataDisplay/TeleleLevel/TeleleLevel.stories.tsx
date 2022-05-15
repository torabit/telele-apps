import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TeleleLevel } from './TeleleLevel';

export default {
  title: 'DataDisplay/TeleleLevel',
  component: TeleleLevel,
} as ComponentMeta<typeof TeleleLevel>;

const Template: ComponentStory<typeof TeleleLevel> = (args) => <TeleleLevel {...args} />;

export const noExp = Template.bind({});
export const Level = Template.bind({});
export const LevelWithRemainder = Template.bind({});

noExp.args = {
  exp: 0,
  fontSize: 'MEDIUM',
};
Level.args = {
  exp: 10000,
  fontSize: 'MEDIUM',
};
LevelWithRemainder.args = {
  exp: 9800,
  fontSize: 'SMALL',
};
