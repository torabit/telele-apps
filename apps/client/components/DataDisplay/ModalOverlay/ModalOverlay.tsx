import React, { ReactElement, ReactNode, useRef, useState } from 'react';
import { useClickAway, useLockBodyScroll } from '../../../hooks';
import { SvgIcon } from '../../General/SvgIcon';
import { useButtonReaction } from '../../../hooks';

import CloseSVG from '../../../assets/images/close.svg';

interface ModalOverlayProps {
  setModalOpen: (v: boolean) => void;
  children?: ReactNode;
}

export const ModalOverlay: React.VFC<ModalOverlayProps> = (props): ReactElement => {
  const { setModalOpen, children } = props;
  const [isHover, setIsHover] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const preventFocusOnPress = true;
  const onPress = () => setModalOpen(false);
  useClickAway(ref, () => {
    setModalOpen(false);
  });
  const { buttonProps } = useButtonReaction({ onPress, preventFocusOnPress }, ref);
  useLockBodyScroll();
  const closeButtonColor = isHover ? 'var(--color-white)' : 'var(--color-opac-w-10)';
  return (
    <>
      <div className='overlay'>
        <div className='operable' ref={ref}>
          <button
            className='close-modal'
            aria-label='プロフィールを閉じる'
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            {...buttonProps}
          >
            <SvgIcon svg={CloseSVG} color={closeButtonColor} />
          </button>
          {children}
        </div>
      </div>
      <style jsx>{`
        .overlay {
          position: fixed;
          z-index: var(--z-index-modal);
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          overflow-y: scroll;
          background-color: var(--color-opac-b-9);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .close-modal {
          position: absolute;
          top: 0;
          left: 0;
          background: none;
          border: none;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          user-select: none;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
