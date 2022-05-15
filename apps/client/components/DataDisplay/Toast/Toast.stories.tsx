import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FilledButton } from '../../General/FilledButton';
import ToastifyContainer, { toastError, toastSuccess, toastInfo, toastWarn } from './Toast';

export default {
  title: 'DataDisplay/Toast',
  component: ToastifyContainer,
} as ComponentMeta<typeof ToastifyContainer>;

const Template: ComponentStory<typeof ToastifyContainer> = (args) => {
  const notifyError = () =>
    toastError({
      content: (
        <div>
          <p>error</p>
          <ul>
            <li>エラー</li>
          </ul>
        </div>
      ),
    });
  const notifySuccess = () =>
    toastSuccess({
      content: (
        <div>
          <p>success</p>
          <ul>
            <li>成功</li>
          </ul>
        </div>
      ),
    });
  const notifyInfo = () =>
    toastInfo({
      content: (
        <div>
          <p>info</p>
          <ul>
            <li>情報</li>
          </ul>
        </div>
      ),
    });
  const notifyWarn = () =>
    toastWarn({
      content: (
        <div>
          <p>warn</p>
          <ul>
            <li>警告</li>
          </ul>
        </div>
      ),
    });
  return (
    <>
      <FilledButton label='error' size='SMALL' onPress={notifyError} />
      <FilledButton label='success' size='SMALL' onPress={notifySuccess} />
      <FilledButton label='info' size='SMALL' onPress={notifyInfo} />
      <FilledButton label='warn' size='SMALL' onPress={notifyWarn} />
      <ToastifyContainer />
    </>
  );
};

export const Error = Template.bind({});

Error.args = {};
