import React, { ReactElement } from 'react';
import { SkeletonText as ChakraSkeletonText } from '@chakra-ui/react';

interface SkeletonTextProps {
  isLoading?: boolean;
  skeletonHeight?: string;
  mt?: string;
  noOfLines: number;
  spacing: string;
}

export const SkeletonText: React.VFC<SkeletonTextProps> = (props): ReactElement => {
  const { isLoading = true, skeletonHeight = '1.2rem', mt = '0', noOfLines, spacing } = props;
  return (
    <ChakraSkeletonText
      startColor='#ffc600'
      endColor='#f56040'
      skeletonHeight={skeletonHeight}
      isLoaded={!isLoading}
      mt={mt}
      noOfLines={noOfLines}
      spacing={spacing}
    />
  );
};
