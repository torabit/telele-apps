import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SquareImage } from './SquareImage';

export default {
  title: 'DataDisplay/SquareImage',
  component: SquareImage,
} as ComponentMeta<typeof SquareImage>;

const Template: ComponentStory<typeof SquareImage> = (args) => <SquareImage {...args} />;

export const Xlarge = Template.bind({});
export const Large = Template.bind({});
export const Medium = Template.bind({});
export const Small = Template.bind({});

Xlarge.args = {
  src: 'images/ApexLegends.png',
  size: 'XLARGE',
  url: 'Apex Legends',
  alt: 'Apex Legends',
};
Large.args = {
  src: 'images/Dota2.png',
  size: 'LARGE',
  url: 'Dota2',
  alt: 'Dota2',
};
Medium.args = {
  src: 'images/LeagueOfLegends.jpg',
  size: 'MEDIUM',
  url: 'League of Legends',
  alt: 'League of Legends',
};
Small.args = {
  src: 'images/BattleField2042.jpg',
  size: 'SMALL',
  url: 'BattleField 2042',
  alt: 'BattleField 2042',
};
