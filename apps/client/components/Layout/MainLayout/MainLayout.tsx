import React, { ReactElement, ReactNode, useState } from 'react';
import { SideNav } from '../../Navigation/SideNav';
import { TopNav } from '../../Navigation/TopNav';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.VFC<MainLayoutProps> = (props): ReactElement => {
  const { children } = props;
  const [isDisplaySideNav, setDisplaySideNav] = useState<boolean>(false);

  const toggleDisplaySideNav = () => {
    setDisplaySideNav(!isDisplaySideNav);
  };

  const cn = isDisplaySideNav ? null : 'wide';
  return (
    <>
      <div>
        <TopNav isLoggedIn={true} hamburgerToggle={toggleDisplaySideNav} />
        {isDisplaySideNav ? <SideNav /> : null}
        <div className={['container', cn].join(' ')}>{children}</div>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          padding: 8rem 0;
          align-items: center;
        }
        .container.wide {
          width: 100%;
        }
        @media screen and (min-width: 600px) {
          .container {
            margin-left: 24rem;
            width: calc(100% - 24rem);
            padding: 8rem 8rem 0;
            vertical-align: top;
            display: inline-block;
            position: relative;
          }
          .container.wide {
            margin-left: 0;
            width: 100%;
            display: block;
          }
        }
      `}</style>
    </>
  );
};
