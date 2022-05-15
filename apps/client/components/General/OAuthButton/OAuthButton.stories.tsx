import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { OAuthButton } from './OAuthButton';
import DiscordSVG from '../../../assets/images/discord.svg';
import TwitterSVG from '../../../assets/images/twitter.svg';

export default {
  title: 'General/OAuthButton',
  component: OAuthButton,
} as ComponentMeta<typeof OAuthButton>;

const Template: ComponentStory<typeof OAuthButton> = (args) => {
  return (
    <>
      <div className='container'>
        <OAuthButton {...args} />
      </div>
      <style jsx>{`
        .container {
          width: 45rem;
        }
      `}</style>
    </>
  );
};

export const signIn = Template.bind({});
export const signUp = Template.bind({});

signIn.args = {
  label: 'Discordでログイン',
  color: 'var(--color-discord)',
  svg: DiscordSVG,
  onPress: () => alert('a button pressed!'),
};
signUp.args = {
  label: 'Twitterで登録',
  color: 'var(--color-twitter)',
  svg: TwitterSVG,
  onPress: () => alert('a button pressed!'),
};
