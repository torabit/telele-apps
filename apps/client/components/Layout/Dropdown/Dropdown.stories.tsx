import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownMenuItem } from './Dropdown';
import LogoSVG from '../../../assets/images/logo.svg';
import { SvgIcon } from '../../General/SvgIcon/SvgIcon';

export default {
  title: 'Layout/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = () => {
  return (
    <>
      <div className='container'>
        <Dropdown>
          <DropdownToggle ariaLabel='テレレトグル' content='テレレトグル'>
            <SvgIcon svg={LogoSVG} size='6rem' color='var(--color-telele-orange)' />
          </DropdownToggle>
          <DropdownMenu
            width='24rem'
            anchorOrigin={{
              positionX: 'left',
              positionY: 'top',
              translateX: 0,
              translateY: 8,
            }}
          >
            <DropdownMenuItem>
              <div className='dropdown-menu-item'>hello</div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className='dropdown-menu-item'>hello</div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className='dropdown-menu-item'>hello</div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className='dropdown-menu-item'>hello</div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <div className='dropdown-menu-item'>hello</div>
            </DropdownMenuItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <style jsx>{`
        .container {
          height: 10rem;
          width: 100%;
        }
        .dropdown-menu-item {
          width: 100%;
          display: flex;
          align-items: center;
          padding-inline: 0.8rem;
          font-size: var(--font-size-7);
          height: 3rem;
          color: var(--color-text-base);
          border-radius: var(--border-radius-medium);
        }
      `}</style>
    </>
  );
};

export const UserToggle = Template.bind({});

UserToggle.args = {};
