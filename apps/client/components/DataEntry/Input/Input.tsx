import React, { ReactElement } from 'react';
import { Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError?: boolean;
}

export const Input: React.VFC<InputProps> = (props): ReactElement => {
  const {
    onChange,
    isError,
    placeholder = '',
    size = 'lg',
    variant = 'filled',
    focusBorderColor = '#ffc600',
    errorBorderColor = '#eb0400',
  } = props;
  return (
    <ChakraInput
      onChange={onChange}
      placeholder={placeholder}
      bgColor='var(--color-input-background)'
      _hover={{ borderColor: 'var(--color-input-hover)' }}
      _focus={{ background: 'var(--color-input-focus)', borderColor: `${focusBorderColor}` }}
      size={size}
      variant={variant}
      errorBorderColor={errorBorderColor}
      color='var(--color-text-base)'
      isInvalid={isError}
    />
  );
};
