import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TagsRow } from './TagsRow';

export default {
  title: 'General/TagsRow',
  component: TagsRow,
} as ComponentMeta<typeof TagsRow>;

const Template: ComponentStory<typeof TagsRow> = (args) => {
  return (
    <>
      <div className='container'>
        <TagsRow {...args} />
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

export const DefaultTagsRow = Template.bind({});

DefaultTagsRow.args = {
  tagNames: [
    { name: 'とらのすけだよ' },
    { name: 'やまだだよ' },
    { name: 'きよはらだよ' },
    { name: 'たかしだよ' },
    { name: 'がちゃぴんだよ' },
    { name: 'まみむめもだよ' },
    { name: 'ケンドリックラマーだよ' },
  ],
  margin: '0.5rem 0 0 0',
  rightGradiantEdge: 49.7,
};
