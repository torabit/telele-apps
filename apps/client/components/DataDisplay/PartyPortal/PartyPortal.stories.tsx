import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PartyPortal } from './PartyPortal';

export default {
  title: 'DataDisplay/PartyPortal',
  component: PartyPortal,
} as ComponentMeta<typeof PartyPortal>;

const Template: ComponentStory<typeof PartyPortal> = (args) => <PartyPortal {...args} />;

export const FilledParty = Template.bind({});

FilledParty.args = {
  src: 'images/kasikoma.jpg',
  user_id: 'sunsea',
  party_name:
    'CAPCOM Pro Tour 2021 日本大会４ ◇1月22日(土)-1月23日(日) 両日 PM 4:25~ ◇特別事前番組は22日AM 11:50~放送スタート‼',
  game_title: 'Apex Legends',
  tagNames: [
    { name: 'とらのすけだよ' },
    { name: 'やまだだよ' },
    { name: 'きよはらだよ' },
    { name: 'たかしだよ' },
    { name: 'がちゃぴんだよ' },
    { name: 'まみむめもだよ' },
    { name: 'ケンドリックラマーだよ' },
  ],
  maximum_party_members: 10,
  current_party_members: 9,
};
