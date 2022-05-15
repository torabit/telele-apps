import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FilledButton } from './FilledButton';

export default {
  title: 'General/FilledButton',
  component: FilledButton,
} as ComponentMeta<typeof FilledButton>;

const Template: ComponentStory<typeof FilledButton> = (args) => {
  return (
    <>
      <div className='container'>
        <FilledButton {...args} />
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
  size: 'LARGE',
  label: 'button',
  borderRadius: 'SUPER',
  onPress: () => alert('a button pressed!'),
};

Small.args = {
  size: 'SMALL',
  label: 'button',
  borderRadius: 'DEFAULT',
  onPress: () => alert('Small button pressed!'),
};
