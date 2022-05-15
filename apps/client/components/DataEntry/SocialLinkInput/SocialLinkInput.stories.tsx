import React, { useReducer } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { initialSocialLinkState, socialLinkReducer } from './controller';
import { SocialLinkInput } from './SocialLinkInput';

export default {
  title: 'DataEntry/SocialLinkInput',
  component: SocialLinkInput,
} as ComponentMeta<typeof SocialLinkInput>;

const Template: ComponentStory<typeof SocialLinkInput> = () => {
  const [socialLinkState, socialLinkDispatch] = useReducer(
    socialLinkReducer,
    initialSocialLinkState
  );
  return (
    <SocialLinkInput socialLinkState={socialLinkState} socialLinkDispatch={socialLinkDispatch} />
  );
};

export const DefaultSocialLinkInput = Template.bind({});

DefaultSocialLinkInput.args = {};
