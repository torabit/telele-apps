import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider } from './Divider';

export default {
  title: 'Layout/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => {
  return (
    <>
      <div className='container'>
        <Divider {...args} />
      </div>
      <style jsx>{`
        .container {
          height: 10rem;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export const Horizontal = Template.bind({});
export const Vertical = Template.bind({});

Horizontal.args = {};

Vertical.args = {
  orientation: 'vertical',
  color: 'red',
  opacity: 1,
};
