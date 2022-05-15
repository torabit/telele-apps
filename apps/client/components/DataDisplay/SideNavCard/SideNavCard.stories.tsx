import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SideNavCard } from './SideNavCard';

export default {
  title: 'DataDisplay/SideNavCard',
  component: SideNavCard,
} as ComponentMeta<typeof SideNavCard>;

const Template: ComponentStory<typeof SideNavCard> = (args) => {
  return (
    <>
      <div className='container'>
        <SideNavCard {...args} />
        <SideNavCard {...args} />
        <SideNavCard {...args} />
        <SideNavCard {...args} />
        <SideNavCard {...args} />
        <SideNavCard {...args} />
      </div>
      <style jsx>{`
        .container {
          width: 24rem;
          background-color: var(--color-card);
        }
        .label {
          color: var(--color-text-base);
        }
      `}</style>
    </>
  );
};

export const DefaultSideBarCard = Template.bind({});

DefaultSideBarCard.args = {
  src: 'images/kasikoma.jpg',
  user_id: 'sunseaああああああああああああああ',
  display_name: 'sunseaああああああああああああああ',
};
