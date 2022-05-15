import React, { ReactElement, ReactNode } from 'react';
import { Skeleton as ChakraSkeleton } from '@chakra-ui/react';

interface SkeletonProps {
  isLoading?: boolean;
  height?: string;
}

export const Skeleton: React.VFC<SkeletonProps> = (props): ReactElement => {
  const { isLoading = true, height = '20px' } = props;
  return (
    <ChakraSkeleton startColor='#ffc600' endColor='#f56040' isLoaded={!isLoading} height={height} />
  );
};
