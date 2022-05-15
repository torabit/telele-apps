import React, { memo } from 'react';

interface SvgIconProps {
  svg: React.FC<React.SVGProps<SVGElement>>;
  size?: string;
  color: string;
  width?: string;
  height?: string;
}

export const SvgIcon: React.FC<SvgIconProps> = (props) => {
  const { size, width = '3rem', height = '3rem', color } = props;
  const svgWidth = size ? size : width;
  const svgHeight = size ? size : height;
  return <props.svg width={svgWidth} height={svgHeight} fill={color} />;
};
