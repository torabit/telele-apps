import React, { ReactElement, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { SvgIcon } from '../../General/SvgIcon';
import SearchSVG from '../../../assets/images/search.svg';
import PartySVG from '../../../assets/images/party.svg';
import { Divider } from '../../Layout/Divider';
import { isSmartPhone } from 'common/utils';
import { useLockBodyScroll } from 'hooks';

interface IconLinkProps {
  href: string;
  label: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const IconLink: React.VFC<IconLinkProps> = (props): ReactElement => {
  const { href, label, leftIcon, rightIcon } = props;
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <>
      <a href={href} onClick={handleClick}>
        <div className='icon-link-wrapper'>
          {leftIcon}
          <p className='icon-link-label'>{label}</p>
          {rightIcon}
        </div>
      </a>
      <style jsx>{`
        .icon-link-wrapper {
          display: flex;
          align-items: center;
        }

        .icon-link-label {
          font-size: var(--font-size-6);
          font-weight: var(--font-weight-bold);
          margin-left: 1.8rem;
          margin-right: 1.8rem;
          transition: 0.1s;
        }
      `}</style>
    </>
  );
};

export const SideNav: React.VFC = (): ReactElement => {
  useLockBodyScroll(isSmartPhone());

  return (
    <>
      <nav className='side-nav'>
        <div className='side-nav-menu'>
          <IconLink
            href='directory'
            label='探す'
            leftIcon={<SvgIcon size='3rem' color='var(--color-text-alt)' svg={SearchSVG} />}
          />
          <div className='layout' />
          <IconLink
            href='party'
            label='募集する'
            leftIcon={<SvgIcon size='3rem' color='var(--color-text-alt)' svg={PartySVG} />}
          />
          <div className='layout' />
          <Divider weight={0.2} />
        </div>
      </nav>
      <style jsx>{`
        .layout {
          margin-top: 1rem;
        }
        .side-nav {
          position: fixed;
          margin-top: 5rem;
          z-index: var(--z-index-sticky);
          width: 100vw;
          height: 100vh;
        }
        .side-nav-menu {
          width: 100%;
          height: 100%;
          padding: 1rem;
          background-color: var(--color-background-base);
        }

        @media screen and (min-width: 600px) {
          .layout {
            margin-top: 1rem;
          }
          .side-nav {
            position: fixed;
            margin-top: 5.2rem;
            z-index: var(--z-index-sticky);
            width: 24rem;
            height: 100vh;
          }
          .side-nav-menu {
            width: 100%;
            height: 100%;
            background-color: var(--color-background-base);
          }
        }
      `}</style>
    </>
  );
};
