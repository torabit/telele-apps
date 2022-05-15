import React, { useState, useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormGroup } from './FormGroup';
import { ErrorCode } from '../../../common/error';
import { isURL } from '../../../common/utils';

export default {
  title: 'DataEntry/FormGroup',
  component: FormGroup,
} as ComponentMeta<typeof FormGroup>;

const Template: ComponentStory<typeof FormGroup> = (args) => {
  const [isError, setIsError] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  useEffect(() => {
    if (isURL(value)) setIsError(false);
    else setIsError(true);
  }, [value]);
  return <FormGroup {...args} onChange={(e) => setValue(e.target.value)} isError={isError} />;
};

export const DefaultFormGroup = Template.bind({});

DefaultFormGroup.args = {
  id: 'add-social-link-url-input',
  label: 'リンクのURL',
  helperText: '正しい記法でURLを入力してください 例: https://twitter.com/telele',
  errorCode: ErrorCode.telele_input_notSocialLink,
};
