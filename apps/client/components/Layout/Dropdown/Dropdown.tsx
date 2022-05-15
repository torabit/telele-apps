import React, {
  useContext,
  useRef,
  useState,
  ReactNode,
  ReactElement,
  useEffect,
  RefObject,
} from 'react';
import { useClickAway, usePressReaction, useButtonReaction } from '../../../hooks';
import { Tooltip } from '../../DataDisplay/Tooltip';

const dropdownRef: Partial<RefObject<HTMLDivElement>> = {};
const Context = React.createContext({
  show: false,
  setShow: (v: boolean) => {},
  ref: dropdownRef,
});

const useDropdownContext = () => {
  return useContext(Context);
};

interface DropdownProps {
  children: ReactNode;
}

export const Dropdown: React.VFC<DropdownProps> = (props): ReactElement => {
  const { children } = props;

  const [show, setShow] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className='dropdown' ref={ref}>
        <Context.Provider value={{ show, setShow, ref }}>{children}</Context.Provider>
      </div>
      <style jsx>{`
        .dropdown {
          position: relative;
        }
      `}</style>
    </>
  );
};

interface DropdownToggleProps {
  children: ReactNode;
  content?: string;
  tooltipDisabled?: boolean;
  ariaLabel?: string;
}

export const DropdownToggle: React.VFC<DropdownToggleProps> = (props): ReactElement => {
  const { children, content, tooltipDisabled = false, ariaLabel } = props;

  const { show, setShow } = useDropdownContext();
  const ref = useRef<HTMLButtonElement>(null);

  const preventFocusOnPress = true;
  const onPress = () => setShow(!show);
  const { buttonProps } = useButtonReaction({ onPress, preventFocusOnPress }, ref);

  // dropdownの状態によってtooltipを表示するか判定
  const [tippyDisabled, setTippyDisabled] = useState<boolean>(tooltipDisabled);
  useEffect(() => {
    if (!tooltipDisabled) {
      setTippyDisabled(show);
    }
  }, [show]);
  return (
    <>
      <Tooltip content={content} isDisabled={tippyDisabled}>
        <button
          className='dropdown-toggle'
          aria-haspopup='true'
          aria-expanded={show}
          aria-label={`${ariaLabel}`}
          ref={ref}
          {...buttonProps}
        >
          {children}
        </button>
      </Tooltip>
      <style jsx>{`
        .dropdown-toggle {
          display: flex;
          align-items: center;
          background: none;
          border: none;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

interface DropdownMenuProps {
  children: ReactNode;
  width: string;
  anchorOrigin: {
    positionX: 'left' | 'right';
    positionY: 'top' | 'bottom';
    translateX: number;
    translateY: number;
  };
}

export const DropdownMenu: React.VFC<DropdownMenuProps> = (props): ReactElement => {
  const { children, width, anchorOrigin } = props;

  const { show, setShow, ref } = useDropdownContext();
  useClickAway(ref as RefObject<HTMLDivElement>, () => {
    setShow(false);
  });

  const closeOnESC = (e: KeyboardEvent) => {
    if (e.key === 'Escape') setShow(false);
  };

  useEffect(() => {
    if (show) {
      document.addEventListener('keydown', closeOnESC);
      return () => {
        document.removeEventListener('keydown', closeOnESC);
      };
    }
  }, [show]);
  return (
    <>
      {show ? (
        <div className='dropdown-menu' role='menu'>
          {children}
        </div>
      ) : null}
      <style jsx>{`
        .dropdown-menu {
          position: absolute;
          box-shadow: var(--shadow-elevation-2);
          background-color: var(--color-background-base);
          border-radius: var(--border-radius-large);
          width: ${width};
          ${anchorOrigin.positionX}: ${anchorOrigin.translateX}rem;
          ${anchorOrigin.positionY}: ${anchorOrigin.translateY}rem;
          animation-name: openedDropdownAnimation;
          animation-duration: 250ms;
          animation-delay: 0ms;
          animation-fill-mode: forwards;
          opacity: 0;
        }
        @keyframes openedDropdownAnimation {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

interface DropdownMenuItemProps {
  children: ReactNode;
  hasMouseOver?: boolean;
  closeOnSelect?: boolean;
  tabIndex?: number;
}

export const DropdownMenuItem: React.VFC<DropdownMenuItemProps> = (props): ReactElement => {
  const { children, hasMouseOver = true, closeOnSelect = false, tabIndex = -1 } = props;
  const { setShow } = useDropdownContext();
  const onPress = () => (closeOnSelect ? setShow(false) : null);
  const { pressProps } = usePressReaction({ onPress });
  const mode = hasMouseOver ? 'mouse-over' : null;
  /*
   * closeOnSelectについて調査しないといけない
   * closeOnSelect = trueの場合、子要素にAnchor要素があったとしたら
   * Link先を開く前にmenuをcloseしてしまうため画面遷移ができない。
   */
  return (
    <>
      <div
        {...pressProps}
        className={['dropdown-menu-item', mode].join(' ')}
        tabIndex={tabIndex}
        role='menuitem'
      >
        {children}
      </div>
      <style jsx>{`
        .dropdown-menu-item {
          width: 100%;
          user-select: none;
          border-radius: inherit;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
