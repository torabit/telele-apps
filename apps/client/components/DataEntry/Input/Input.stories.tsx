import React, { useEffect, useState } from 'react';
import { detectStringCountReachLimit } from '../../../common/utils';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'DataEntry/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    if (detectStringCountReachLimit(value, 4, 0)) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [value]);
  return <Input {...args} isError={isError} onChange={(e) => setValue(e.target.value)} />;
};

export const CharacterLimit = Template.bind({});

CharacterLimit.args = {
  placeholder: '',
  size: 'lg',
  variant: 'filled',
  focusBorderColor: '#ffc600',
  errorBorderColor: '#eb0400',
};
