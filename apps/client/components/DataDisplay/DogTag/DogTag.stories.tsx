import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DogTag } from './DogTag';

export default {
  title: 'DataDisplay/DogTag',
  component: DogTag,
} as ComponentMeta<typeof DogTag>;

const Template: ComponentStory<typeof DogTag> = (args) => {
  return (
    <>
      <div className='container'>
        <DogTag {...args} />
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

export const User_1 = Template.bind({});
export const Blank = Template.bind({});
export const UnregisteredUser = Template.bind({});

User_1.args = {
  avatarSrc: 'images/kasikoma.jpg',
  display_name: 'SUNSEA',
  user_id: 'sunsea',
  favoriteColor: '#ee83ff',
  tagNames: [
    { name: 'とらのすけだよ' },
    { name: 'やまだだよ' },
    { name: 'きよはらだよ' },
    { name: 'たかしだよ' },
    { name: 'がちゃぴんだよ' },
    { name: 'まみむめもだよ' },
    { name: 'ケンドリックラマーだよ' },
  ],
  exp: 5900,
  biography:
    'はじめましてさんしーです。はじめましてさんしーです。はじめましてさんしーです。はじめましてさんしーです。はじめましてさんしーです。',
  favoriteGames: [
    { game_id: 'ApexLegends', src: 'images/ApexLegends.png' },
    { game_id: 'Dota2', src: 'images/Dota2.png' },
    { game_id: 'League of Legends', src: 'images/LeagueOfLegends.jpg' },
    { game_id: 'BattleField 2042', src: 'images/BattleField2042.jpg' },
  ],
};
Blank.args = {
  avatarSrc: 'images/cow.png',
  display_name: 'cCow',
  user_id: 'cowcowcowcowcowcow',
};
UnregisteredUser.args = {
  avatarSrc: 'images/kasikoma.jpg',
  tagNames: [{ name: '未登録ユーザー' }],
  biography: '登録が完了していないユーザです。',
};
