import React from 'react';
import TwitterSVG from '../../assets/images/twitter.svg';
import TwitchSVG from '../../assets/images/twitch.svg';
import PublicSVG from '../../assets/images/public.svg';

export const determineSocialMediaLink = (url: string): React.VFC<React.SVGProps<SVGElement>> => {
  if (url.includes('twitter.com')) return TwitterSVG;
  else if (url.includes('twitch.tv')) return TwitchSVG;
  else return PublicSVG;
};
