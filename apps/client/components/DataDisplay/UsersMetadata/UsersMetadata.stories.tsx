import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UsersMetadata } from './UsersMetadata';

export default {
  title: 'DataDisplay/UsersMetadata',
  component: UsersMetadata,
} as ComponentMeta<typeof UsersMetadata>;

const Template: ComponentStory<typeof UsersMetadata> = (args) => {
  return (
    <>
      <UsersMetadata {...args} />
      <style jsx>{`
        .label {
          color: var(--color-text-base);
        }
      `}</style>
    </>
  );
};

export const Large = Template.bind({});
export const Medium = Template.bind({});
export const Small = Template.bind({});

Large.args = {
  user_id: 'mochimochimochi',
  display_name: 'mochi',
  size: 'LARGE',
};

Medium.args = {
  user_id: 'sunseasunsea',
  display_name: 'sunsea',
  size: 'MEDIUM',
};

Small.args = {
  user_id: 'hellohello',
  display_name: 'hello',
  size: 'SMALL',
};
