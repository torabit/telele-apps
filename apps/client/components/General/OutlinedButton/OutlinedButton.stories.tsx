import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OutlinedButton } from './OutlinedButton';

export default {
  title: 'General/OutlinedButton',
  component: OutlinedButton,
} as ComponentMeta<typeof OutlinedButton>;

const Template: ComponentStory<typeof OutlinedButton> = (args) => {
  return (
    <>
      <div className='container'>
        <OutlinedButton {...args} />
      </div>
      <style jsx>{`
        .container {
          width: 45rem;
          height: 45rem;
        }
      `}</style>
    </>
  );
};

export const Large = Template.bind({});
export const Small = Template.bind({});

Large.args = {
  label: 'ログインする',
  size: 'LARGE',
  onPress: () => alert('a button pressed!'),
};

Small.args = {
  label: '参加する',
  size: 'SMALL',
  onPress: () => alert('a button pressed!'),
};
