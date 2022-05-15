import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonAvatar } from './ButtonAvatar';

export default {
  title: 'DataDisplay/ButtonAvatar',
  component: ButtonAvatar,
} as ComponentMeta<typeof ButtonAvatar>;

const Template: ComponentStory<typeof ButtonAvatar> = (args) => <ButtonAvatar {...args} />;

export const AlertAvatar = Template.bind({});

AlertAvatar.args = {
  src: 'images/kasikoma.jpg',
  size: 'XLARGE',
  user_id: 'sunsea',
  onPress: () => alert('clicked!'),
};
