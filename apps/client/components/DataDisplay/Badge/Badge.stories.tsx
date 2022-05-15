import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge } from './Badge';
import { Avatar } from '../Avatar';
import { SvgIcon } from '../../General/SvgIcon/SvgIcon';
import NotificationSVG from '../../../assets/images/notification.svg';

export default {
  title: 'DataDisplay/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => {
  return (
    <>
      <div className='container'>
        <Badge {...args}>
          <Avatar size='LARGE' user_id='torabit' src='images/kasikoma.jpg' />
        </Badge>
        <Badge {...args}>
          <SvgIcon svg={NotificationSVG} size='3rem' color='white' />
        </Badge>
      </div>
      <style jsx>{`
        .container {
          width: 2rem;
          height: 2rem;
        }
      `}</style>
    </>
  );
};

export const TopRight = Template.bind({});

TopRight.args = {
  badgeContent: 10,
  anchorOrigin: 'TR',
};
