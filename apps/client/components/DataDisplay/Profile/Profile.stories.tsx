import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Profile } from './Profile';

export default {
  title: 'DataDisplay/Profile',
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />;

export const ProfileForPC = Template.bind({});

ProfileForPC.args = {
  avatarSrc: 'images/kasikoma.jpg',
  display_name: 'SUNSEAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  user_id: 'sunsea34',
  favoriteColor: '#EE83FF',
  socialMediaLinks: [
    { url: 'https://www.twitch.tv/sunsea34', label: 'Twitch' },
    { url: 'https://twitter.com/345_yusagi', label: 'Twitter' },
    { url: 'https://zenn.dev/torabit', label: 'Zenn' },
    { url: 'https://zenn.dev/torabit', label: 'Zenn' },
    { url: 'https://zenn.dev/torabit', label: 'Zenn' },
    { url: 'https://zenn.dev/torabit', label: 'Zenn' },
    { url: 'https://zenn.dev/torabit', label: 'Zenn' },
    { url: 'https://zenn.dev/torabit', label: 'Zenn' },
    { url: 'https://zenn.dev/torabit', label: 'Zenn' },
    { url: 'https://zenn.dev/torabit', label: 'Zenn' },
    { url: 'https://zenn.dev/torabit', label: 'Zenn' },
    { url: 'https://zenn.dev/torabit', label: 'Zenn' },
    { url: 'https://zenn.dev/torabit', label: 'Zenn' },
    { url: 'https://zenn.dev/torabit', label: 'Zenn' },
    { url: 'https://zenn.dev/torabit', label: 'Zenn' },
  ],
  tags: [
    { key: 'とらのすけだよ' },
    { key: 'やまだだよ' },
    { key: 'きよはらだよ' },
    { key: 'たかしだよ' },
    { key: 'がちゃぴんだよ' },
    { key: 'まみむめもだよ' },
    { key: 'ケンドリックラマーだよ' },
  ],
  exp: 50900,
  biography:
    'はじめましてさんしーです。\r\nはじめましてさんしーです。\r\nはじめましてさんしーです。\r\nはじめましてさんしーです。\r\nはじめましてさんしーです。',
  birthday: '2000年8月28日',
  gender: '男',
  coretime: '22:00 ~ 23:00',
};
