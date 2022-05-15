import React, { ReactElement } from 'react';
import { SkeletonCircle as ChakraSkeletonCircle } from '@chakra-ui/react';

interface SkeletonCircleProps {
  isLoading?: boolean;
  size: string;
}

export const SkeletonCircle: React.VFC<SkeletonCircleProps> = (props): ReactElement => {
  const { isLoading = true, size } = props;
  return (
    <ChakraSkeletonCircle
      startColor='#ffc600'
      endColor='#f56040'
      isLoaded={!isLoading}
      size={size}
    />
  );
};
