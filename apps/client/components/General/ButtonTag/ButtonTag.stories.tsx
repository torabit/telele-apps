import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonTag } from './ButtonTag';
import { useToggleTags, Tag } from '../../../hooks';

export default {
  title: 'General/ButtonTag',
  component: ButtonTag,
} as ComponentMeta<typeof ButtonTag>;

const TeleleTags: Tag[] = [
  { title: 'ゲーム', id: 111 },
  { title: 'PS4', id: 202 },
  { title: 'Among us', id: 303 },
  { title: 'Apex Legends', id: 404 },
  { title: 'League of Legends', id: 505 },
  { title: 'Resident Evil', id: 606 },
];

const Template: ComponentStory<typeof ButtonTag> = () => {
  const [selectedTags, renderTags] = useToggleTags(TeleleTags);
  return (
    <>
      <div className='container'>
        <div className='container'>{renderTags()}</div>
        <button onClick={() => alert(selectedTags())}>送信</button>
      </div>
      <style jsx>{`
        .container {
          height: 10rem;
          width: 50rem;
        }
      `}</style>
    </>
  );
};

export const DefaultButtonTag = Template.bind({});
