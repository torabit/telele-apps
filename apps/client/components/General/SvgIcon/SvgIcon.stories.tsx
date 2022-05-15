import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SvgIcon } from './SvgIcon';
import LogoSVG from '../../../assets/images/logo.svg';
import LogoNontextSVG from '../../../assets/images/logo-nontext.svg';
import HomeSVG from '../../../assets/images/home.svg';
import SearchSVG from '../../../assets/images/search.svg';
import PartySVG from '../../../assets/images/party.svg';
import NotificationSVG from '../../../assets/images/notification.svg';
import MessageSVG from '../../../assets/images/message.svg';
import ArrowUpSVG from '../../../assets/images/arrow-up.svg';
import ArrowRightSVG from '../../../assets/images/arrow-right.svg';
import ArrowDownSVG from '../../../assets/images/arrow-down.svg';
import ArrowLeftSVG from '../../../assets/images/arrow-left.svg';
import TwitterSVG from '../../../assets/images/twitter.svg';
import TwitchSVG from '../../../assets/images/twitch.svg';
import GoogleSVG from '../../../assets/images/google.svg';
import DiscordSVG from '../../../assets/images/discord.svg';
import AddSVG from '../../../assets/images/add.svg';
import CloseSVG from '../../../assets/images/close.svg';
import EllipsisSVG from '../../../assets/images/ellipsis.svg';
import FollowSVG from '../../../assets/images/follow.svg';
import HamburgerSVG from '../../../assets/images/hamburger.svg';
import PeopleSVG from '../../../assets/images/people.svg';
import SentSVG from '../../../assets/images/sent.svg';
import SettingSVG from '../../../assets/images/setting.svg';
import PublicSVG from '../../../assets/images/public.svg';

export default {
  title: 'General/SvgIcon',
  component: SvgIcon,
} as ComponentMeta<typeof SvgIcon>;

const LogoIconsTemplate: ComponentStory<typeof SvgIcon> = (args) => {
  return (
    <>
      <SvgIcon {...args} svg={LogoSVG} />
      <SvgIcon {...args} svg={LogoNontextSVG} />
    </>
  );
};
export const logoIcons = LogoIconsTemplate.bind({});
logoIcons.args = {
  size: '24rem',
  color: 'var(--color-telele-orange)',
};

const MenuIconsTemplate: ComponentStory<typeof SvgIcon> = (args) => {
  return (
    <>
      <SvgIcon {...args} svg={HomeSVG} />
      <SvgIcon {...args} svg={SearchSVG} />
      <SvgIcon {...args} svg={PartySVG} />
      <SvgIcon {...args} svg={NotificationSVG} />
      <SvgIcon {...args} svg={MessageSVG} />
    </>
  );
};
export const menuIcons = MenuIconsTemplate.bind({});
menuIcons.args = {
  size: '6rem',
  color: 'var(--color-telele-orange)',
};

const ArrowIconsTemplate: ComponentStory<typeof SvgIcon> = (args) => {
  return (
    <>
      <SvgIcon {...args} svg={ArrowUpSVG} />
      <SvgIcon {...args} svg={ArrowRightSVG} />
      <SvgIcon {...args} svg={ArrowDownSVG} />
      <SvgIcon {...args} svg={ArrowLeftSVG} />
    </>
  );
};
export const arrowIcons = ArrowIconsTemplate.bind({});
arrowIcons.args = {
  size: '6rem',
  color: 'var(--color-telele-orange)',
};

const OAuthIconsTemplate: ComponentStory<typeof SvgIcon> = (args) => {
  return (
    <>
      <SvgIcon {...args} svg={TwitterSVG} />
      <SvgIcon {...args} svg={TwitchSVG} />
      <SvgIcon {...args} svg={GoogleSVG} />
      <SvgIcon {...args} svg={DiscordSVG} />
    </>
  );
};
export const oauthIcons = OAuthIconsTemplate.bind({});
oauthIcons.args = {
  size: '5rem',
  color: 'var(--color-telele-orange)',
};

const EtcIconsTemplate: ComponentStory<typeof SvgIcon> = (args) => {
  return (
    <>
      <SvgIcon {...args} svg={AddSVG} />
      <SvgIcon {...args} svg={CloseSVG} />
      <SvgIcon {...args} svg={EllipsisSVG} />
      <SvgIcon {...args} svg={FollowSVG} />
      <SvgIcon {...args} svg={HamburgerSVG} />
      <SvgIcon {...args} svg={PeopleSVG} />
      <SvgIcon {...args} svg={SentSVG} />
      <SvgIcon {...args} svg={SettingSVG} />
      <SvgIcon {...args} svg={PublicSVG} />
    </>
  );
};
export const etcIcons = EtcIconsTemplate.bind({});
etcIcons.args = {
  size: '6rem',
  color: 'var(--color-telele-orange)',
};
