import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag } from './Tag';

export default {
  title: 'General/Tag',
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => {
  return (
    <>
      <div className='container'>
        <Tag {...args} />
        <Tag {...args} />
        <Tag {...args} />
        <Tag {...args} />
        <Tag {...args} />
        <Tag {...args} />
      </div>
      <style jsx>{`
        .container {
          height: 50rem;
          width: 50rem;
        }
      `}</style>
    </>
  );
};

export const DefaultTag = Template.bind({});

DefaultTag.args = {
  label: 'だれでも参加どうぞ',
  margin: '0.5rem',
  mode: 'tag',
};
