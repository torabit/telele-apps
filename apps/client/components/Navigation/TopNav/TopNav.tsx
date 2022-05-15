import React, { ReactElement } from 'react';

import { useDarkMode, useHover } from '../../../hooks';

import { Divider } from '../../Layout/Divider';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownMenuItem } from '../../Layout/Dropdown';
import { SvgIcon } from '../../General/SvgIcon';
import { Switch } from '../../General/Switch';
import { Badge } from '../../DataDisplay/Badge';
import { UsersMetadata } from '../../DataDisplay/UsersMetadata';
import { Avatar } from '../../DataDisplay/Avatar';
import { Tooltip } from '../../DataDisplay/Tooltip';
import { FilledButton } from '../../General/FilledButton';
import { OutlinedButton } from '../../General/OutlinedButton';

import HamburgerSVG from '../../../assets/images/hamburger.svg';
import LogoNavSVG from '../../../assets/images/logo-nav.svg';
import LogoNontextSVG from '../../../assets/images/logo-nontext.svg';
import NotificationSVG from '../../../assets/images/notification.svg';
import Link from 'next/link';
interface TopNavSVGProps {
  svg: React.VFC<React.SVGProps<SVGElement>>;
  size: string;
}

const TopNavSVG: React.VFC<TopNavSVGProps> = (props): ReactElement => {
  const { svg, size } = props;
  const [hoverRef, isHovered] = useHover<HTMLSpanElement>();
  const svgColor = isHovered
    ? 'var(--color-fill-button-icon-hover)'
    : 'var(--color-fill-button-icon)';
  return (
    <span ref={hoverRef}>
      <SvgIcon svg={svg} size={size} color={svgColor} />
    </span>
  );
};

interface HamburgerToggleProps {
  onClick: () => void;
}

const HamburgerToggle: React.VFC<HamburgerToggleProps> = (props): ReactElement => {
  const { onClick } = props;
  return (
    <>
      <button className='top-nav-svg' aria-label='ガイド' onClick={onClick}>
        <TopNavSVG svg={HamburgerSVG} size='3rem' />
      </button>
      <style jsx>{`
        .top-nav-svg {
          background: none;
          border: none;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          padding: 0 1rem;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

const NonTextTeleleHome: React.VFC = (): ReactElement => {
  return (
    <>
      <Link href='' aria-label='Teleleホーム'>
        <Tooltip content='Teleleホーム'>
          <TopNavSVG svg={LogoNontextSVG} size={'3rem'} />
        </Tooltip>
      </Link>
    </>
  );
};

const TeleleHome: React.VFC = (): ReactElement => {
  return (
    <>
      <Link href='/' aria-label='Teleleホーム'>
        <Tooltip content='Teleleホーム' followCursorState='initial'>
          <SvgIcon
            svg={LogoNavSVG}
            height={'3rem'}
            width={'8rem'}
            color={'var(--color-telele-orange)'}
          />
        </Tooltip>
      </Link>
    </>
  );
};

interface NotificationToggleProps {
  isLoggedIn: boolean;
}

const NotificationToggle: React.VFC<NotificationToggleProps> = (props): ReactElement => {
  const { isLoggedIn } = props;
  return (
    <>
      <Dropdown>
        <div className='top-nav-notification-toggle'>
          <DropdownToggle content='通知' ariaLabel='通知'>
            {/* 受け取ったデータのlengthをcontentに入れる */}
            <Badge badgeContent={5}>
              <TopNavSVG svg={NotificationSVG} size='2.4rem' />
            </Badge>
          </DropdownToggle>
        </div>
        <DropdownMenu
          width='40rem'
          anchorOrigin={{
            positionX: 'right',
            positionY: 'top',
            translateX: 0,
            translateY: 4,
          }}
        >
          <div className='notification-article'>お知らせ</div>
          {/* 実際はmap関数でlength分回す、uniquekeyはどうしようかなぁ */}
          {isLoggedIn ? (
            <div className='top-nav-dropdown-menu-item-wrapper'>
              <DropdownMenuItem>
                <div className='top-nav-dropdown-menu-item'>aaa</div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className='top-nav-dropdown-menu-item'>aaa</div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className='top-nav-dropdown-menu-item'>aaa</div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className='top-nav-dropdown-menu-item'>aaa</div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className='top-nav-dropdown-menu-item'>aaa</div>
              </DropdownMenuItem>
            </div>
          ) : (
            <div className='unregistered-panel'>
              <div className='notice-log-box'>
                <h4>仲間とつながろう</h4>
                <p>新規登録（無料）、またはログインをするとお知らせ機能を利用できるよ。</p>
                <FilledButton
                  label='新規登録/ログイン'
                  size='LARGE'
                  onPress={() => console.log('hi')}
                />
              </div>
            </div>
          )}
          <Divider />
          <div className='telele-logo-bottom'>
            <NonTextTeleleHome />
          </div>
        </DropdownMenu>
      </Dropdown>

      <style jsx>{`
        .top-nav-dropdown-menu-item {
          width: 100%;
          display: flex;
          align-items: center;
          padding-inline: 0.8rem;
          font-size: var(--font-size-7);
          height: 3rem;
          color: var(--color-text-base);
        }
        .top-nav-notification-toggle {
          margin-right: 1rem;
          padding: 0.8rem;
        }
        .top-nav-dropdown-menu-item-wrapper {
          border-radius: var(--border-radius-medium);
          padding: 1rem;
        }
        .notification-article {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-base);
          border-top-left-radius: 0.4rem;
          border-top-right-radius: 0.4rem;
          box-shadow: var(--shadow-elevation-1);
          padding: 1.5rem 0;
        }
        .unregistered-panel {
          padding: 1rem 2rem;
          color: var(--color-text-base);
        }
        .notice-log-box {
          height: 100%;
        }
        .telele-logo-bottom {
          display: flex;
          height: 4rem;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
};

interface UserToggleProps {
  user_avatar: string;
  user_id: string;
  display_name: string;
}

const UserToggle: React.VFC<UserToggleProps> = (props): ReactElement => {
  const { user_avatar, user_id, display_name } = props;
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <>
      <Dropdown>
        <div className='top-nav-dropdown-button'>
          <DropdownToggle tooltipDisabled={true} ariaLabel='ユーザートグル'>
            <div className='top-nav-user-toggle'>
              {/* <Image src={user_avatar} layout='fill' objectFit='contain' /> */}
              <div className='avatar mouse-over' />
            </div>
          </DropdownToggle>
        </div>
        <DropdownMenu
          width='24rem'
          anchorOrigin={{
            positionX: 'right',
            positionY: 'top',
            translateX: 0,
            translateY: 4,
          }}
        >
          <div className='top-nav-dropdown-menu-item-wrapper'>
            <DropdownMenuItem hasMouseOver={false}>
              <div className='top-nav-dropdown-menu-user'>
                <div>{/* <Avatar src={user_avatar} size='MEDIUM' user_id={user_id} /> */}</div>
                <UsersMetadata
                  display_name={display_name}
                  user_id={user_id}
                  size='SMALL'
                  margin='0 0 0 2rem'
                />
              </div>
            </DropdownMenuItem>
            <Divider />
            <DropdownMenuItem>
              <a className={'top-nav-dropdown-menu-item'}>
                <div>フォロー</div>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a className={'top-nav-dropdown-menu-item'}>
                <div>プロフィール</div>
              </a>
            </DropdownMenuItem>
            <Divider />
            <DropdownMenuItem>
              <div className={'top-nav-dropdown-menu-item'}>
                <div>言語</div>
              </div>
            </DropdownMenuItem>
            <div role='menuitem'>
              <Switch isSelected={darkMode} setSelected={setDarkMode} paddingInline='0.8rem'>
                ダークモード
              </Switch>
            </div>
            <Divider />
            <DropdownMenuItem>
              <div className={'top-nav-dropdown-menu-item'}>
                <div>ログアウト</div>
              </div>
            </DropdownMenuItem>
          </div>
        </DropdownMenu>
      </Dropdown>
      <style jsx>{`
        .top-nav-dropdown-button {
          margin-right: 1rem;
        }
        .top-nav-user-toggle {
          position: relative;
          overflow: hidden;
          border-radius: var(--border-radius-rounded);
          width: 3rem;
          height: 3rem;
          user-select: none;
        }
        .top-nav-dropdown-menu-item-wrapper {
          padding: 1rem;
          border-radius: var(--border-radius-medium);
        }
        .avatar {
          position: absolute;
          border-radius: var(--border-radius-rounded);
          width: 3rem;
          height: 3rem;
        }
        .top-nav-dropdown-menu-user {
          display: flex;
          align-items: center;
        }
        .top-nav-dropdown-menu-item {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-inline: 0.8rem;
          font-size: var(--font-size-7);
          height: 3rem;
          color: var(--color-text-base);
        }
      `}</style>
    </>
  );
};

interface TopNavProps {
  isLoggedIn: boolean;
  user_avatar?: string;
  user_id?: string;
  display_name?: string;
  hamburgerToggle: () => void;
}

export const TopNav: React.VFC<TopNavProps> = (props): ReactElement => {
  const {
    isLoggedIn,
    user_avatar = '',
    user_id = 'traveller',
    display_name = 'たかし',
    hamburgerToggle,
  } = props;
  return (
    <>
      <nav className='top-nav'>
        <div className='top-nav-menu'>
          <div className='top-nav-left'>
            <HamburgerToggle onClick={hamburgerToggle} />
            <TeleleHome />
          </div>
          <div className='top-nav-right'>
            <NotificationToggle isLoggedIn={isLoggedIn} />

            {isLoggedIn ? (
              // logginしているユーザ
              <UserToggle user_avatar={user_avatar} user_id={user_id} display_name={display_name} />
            ) : (
              // logginしていないユーザ
              <div className='top-nav-button-wrapper'>
                <div className='top-nav-button'>
                  <FilledButton label='新規登録' size='SMALL' onPress={() => console.log('hi')} />
                </div>
                <div className='top-nav-button'>
                  <OutlinedButton label='ログイン' size='SMALL' onPress={() => console.log('hi')} />
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <style jsx>{`
        .top-nav {
          width: 100%;
          position: fixed;
          z-index: var(--z-index-sticky);
          height: 5rem;
        }
        .top-nav-menu {
          display: flex;
          box-shadow: var(--shadow-elevation-1);
          background-color: var(--color-background-base);
          height: 100%;
          justify-content: space-between;
        }
        .top-nav-left {
          display: flex;
          align-items: center;
        }
        .top-nav-right {
          display: flex;
          align-items: center;
        }
        .top-nav-button {
          width: 7rem;
          margin: 0 0.5rem;
        }
        .top-nav-button-wrapper {
          display: flex;
        }
      `}</style>
    </>
  );
};
