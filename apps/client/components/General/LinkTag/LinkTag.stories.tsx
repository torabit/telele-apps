import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LinkTag } from './LinkTag';

export default {
  title: 'General/LinkTag',
  component: LinkTag,
} as ComponentMeta<typeof LinkTag>;

const Template: ComponentStory<typeof LinkTag> = (args) => {
  return (
    <>
      <div className='container'>
        <LinkTag {...args} />
        <LinkTag {...args} />
        <LinkTag {...args} />
        <LinkTag {...args} />
        <LinkTag {...args} />
        <LinkTag {...args} />
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

export const DefaultLinkTag = Template.bind({});

DefaultLinkTag.args = {
  href: 'https://www.youtube.com/?hl=ja&gl=JP',
  label: 'Youtube',
  margin: '0.5rem',
  target: '_blank',
};
