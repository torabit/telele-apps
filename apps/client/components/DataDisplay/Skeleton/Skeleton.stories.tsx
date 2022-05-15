import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Skeleton } from './Skeleton';

export default {
  title: 'DataDisplay/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => {
  return (
    <>
      <div className='container'>
        <Skeleton {...args}>
          <div>hello</div>
        </Skeleton>
      </div>
      <style jsx>{`
        .container {
          width: 1600px;
          height: 900px;
        }
        .label {
          color: var(--color-text-base);
        }
      `}</style>
    </>
  );
};

export const ApexLegendsCard = Template.bind({});

ApexLegendsCard.args = {
  isLoading: true,
};
