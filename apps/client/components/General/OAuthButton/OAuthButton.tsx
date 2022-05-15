import React, { useRef, ReactElement } from 'react';
import { SvgIcon } from '../SvgIcon';
import { useButtonReaction } from '../../../hooks';

interface Props {
  svg: React.FC<React.SVGProps<SVGElement>>;
  color: string;
  label: string;
  onPress?: () => void;
  preventFocusOnPress?: boolean;
  isDisabled?: boolean;
}

export const OAuthButton: React.FC<Props> = (props): ReactElement => {
  const { svg, label, color, preventFocusOnPress = true } = props;
  const ref = useRef<HTMLButtonElement>(null);
  /*
   * preventFocusOnPressがデフォルトでfalseになっています。
   * クリックするたびにfocusされてしまうのでtrueを渡しています。
   * AdobeのuseButtonの型にプロパティが無いため渡せません。
   */
  const { buttonProps } = useButtonReaction({ ...props, preventFocusOnPress }, ref);
  return (
    <>
      <button className='o-auth-button' {...buttonProps} ref={ref}>
        <div className='label-logo-wrapper mouse-over'>
          <SvgIcon size={'3rem'} color={'var(--color-white)'} svg={svg} />
          <div className='label-wrapper'>
            <p>{label}</p>
          </div>
        </div>
      </button>

      <style jsx>{`
        .o-auth-button {
          width: 100%;
          border-radius: var(--border-radius-extra-large);
          border: none;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          cursor: pointer;
          background-color: ${color};
        }
        .label-logo-wrapper {
          border-radius: inherit;
          display: flex;
          padding: 0.5rem 1rem;
        }
        .label-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .label-wrapper p {
          margin: 0;
          color: var(--color-white);
          line-height: var(--line-height-heading);
          font-size: var(--font-size-base);
          font-weight: var(--font-weight-bold);
          user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          -webkit-user-select: none;
        }
      `}</style>
    </>
  );
};
