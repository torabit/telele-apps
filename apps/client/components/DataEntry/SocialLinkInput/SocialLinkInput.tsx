import React, { ReactElement, useEffect } from 'react';
import { FormGroup } from '../FormGroup';
import { FilledButton } from '../../General/FilledButton';
import { Tooltip } from '../../DataDisplay/Tooltip';
import { ErrorCode } from '../../../common/error';
import { isURL, detectStringCountReachLimit } from '../../../common/utils';
import { SocialLinkState, SocialLinkActions } from './controller';

interface SocialLinkInputProps {
  socialLinkState: SocialLinkState;
  socialLinkDispatch: React.Dispatch<SocialLinkActions>;
}

export const SocialLinkInput: React.VFC<SocialLinkInputProps> = (props): ReactElement => {
  const { socialLinkState, socialLinkDispatch } = props;

  useEffect(() => {
    // 必須項目に入力が確認できない場合はButtonをDisabledに
    if (socialLinkState.title && socialLinkState.url) {
      socialLinkDispatch({
        type: 'SET_DISABLED_BUTTON',
        field: 'isDisabledButton',
        payload: false,
      });
    } else {
      socialLinkDispatch({
        type: 'SET_DISABLED_BUTTON',
        field: 'isDisabledButton',
        payload: true,
      });
    }
  }, [socialLinkState.title, socialLinkState.url]);

  const inputTitleChange = (value: string) => {
    socialLinkDispatch({
      type: 'HANDLE_INPUT_TEXT',
      field: 'title',
      payload: value,
    });
    if (socialLinkState.displayTitleError) {
      socialLinkDispatch({
        type: 'DISPLAY_ERROR',
        field: 'displayTitleError',
        payload: false,
      }); // 新しく入力するとエラーを消す
    }
  };

  const inputURLChange = (value: string) => {
    socialLinkDispatch({
      type: 'HANDLE_INPUT_TEXT',
      field: 'url',
      payload: value,
    });
    if (socialLinkState.displayURLError) {
      socialLinkDispatch({
        type: 'DISPLAY_ERROR',
        field: 'displayURLError',
        payload: false,
      }); // 新しく入力するとエラーを消す
    }
  };

  const submitSocialLink = () => {
    const isAvailableTitle = !detectStringCountReachLimit(socialLinkState.title, 16, 1); // 1文字以上16文字以下かどうかを判定
    const isAvailableURL = isURL(socialLinkState.url); // 文字列がURLかどうかを判定

    socialLinkDispatch({
      type: 'DISPLAY_ERROR',
      field: 'displayTitleError',
      payload: !isAvailableTitle,
    });

    socialLinkDispatch({
      type: 'DISPLAY_ERROR',
      field: 'displayURLError',
      payload: !isAvailableURL,
    });

    if (isAvailableTitle && isAvailableURL) {
      /**
       * ここにSocialLinkを追加する処理を書く
       */
      alert('this is a URL!');
    }
  };
  return (
    <>
      <div className='add-social-link-container'>
        <FormGroup
          label='リンクのタイトル'
          helperText='URLとして表示されるテキストです'
          id='add-social-link-title-input'
          isError={socialLinkState.displayTitleError}
          errorCode={ErrorCode.telele_input_socialLinkTitleNotObeyRegulations}
          onChange={(e) => inputTitleChange(e.target.value)}
        />
        <div className='layout-1' />
        <FormGroup
          label='リンクのURL'
          helperText='正しい記法でURLを入力してください 例: https://twitter.com/telele'
          id='add-social-link-url-input'
          isError={socialLinkState.displayURLError}
          errorCode={ErrorCode.telele_input_notSocialLink}
          onChange={(e) => inputURLChange(e.target.value)}
        />
        <div className='layout-2' />
        <Tooltip
          posY={15}
          content='必須項目を記入してください'
          isDisabled={!socialLinkState.isDisabledButton}
        >
          <FilledButton
            size='SMALL'
            label='追加'
            onPress={submitSocialLink}
            isDisabled={socialLinkState.isDisabledButton}
          />
        </Tooltip>
      </div>
      <style jsx>{`
        .add-social-link-container {
          padding: 2rem 2rem;
          background-color: var(--color-card);
          border-radius: var(--border-radius-extra-large);
        }
        .layout-1 {
          padding-top: 1rem;
        }
        .layout-2 {
          padding-top: 2rem;
        }
      `}</style>
    </>
  );
};
