import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GameCard } from './GameCard';

export default {
  title: 'DataDisplay/GameCard',
  component: GameCard,
} as ComponentMeta<typeof GameCard>;

const Template: ComponentStory<typeof GameCard> = (args) => {
  return (
    <>
      <div className='container'>
        <GameCard {...args} />
        <GameCard {...args} />
        <GameCard {...args} />
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
  src: 'images/ApexLegends.png',
  tagNames: [{ name: 'FPS' }, { name: 'シューターゲーム' }, { name: 'アクション' }],
  url: 'Apex Legends',
  alt: 'Apex Legends',
  title: 'Apex Legendsaaaaaaaaaaaaaaa',
  gameId: '0',
  followersQuantity: '399941',
};
