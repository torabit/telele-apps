import {
  BackgroundColorValue,
  BorderColorValue,
  BorderRadiusValue,
  BorderSizeValue,
  DimensionValue,
} from './dna';
import { CSSProperties } from 'react';

type ResponsiveProp<T> = {
  base?: T;
  S?: T;
  M?: T;
  L?: T;
  [custom: string]: T | undefined;
};
type Responsive<T> = T | ResponsiveProp<T>;

export interface StyleProps {
  UNSAFE_className?: string;
  UNSAFE_style?: CSSProperties;
  margin?: Responsive<DimensionValue>;
  marginStart?: Responsive<DimensionValue>;
  marginEnd?: Responsive<DimensionValue>;
  marginTop?: Responsive<DimensionValue>;
  marginBottom?: Responsive<DimensionValue>;
  marginX?: Responsive<DimensionValue>;
  marginY?: Responsive<DimensionValue>;
  width?: Responsive<DimensionValue>;
  height?: Responsive<DimensionValue>;
  minWidth?: Responsive<DimensionValue>;
  minHeight?: Responsive<DimensionValue>;
  maxWidth?: Responsive<DimensionValue>;
  maxHeight?: Responsive<DimensionValue>;

  flex?: Responsive<string | number | boolean>;
  flexGrow?: Responsive<number>;
  flexShrink?: Responsive<number>;
  flexBasis?: Responsive<number | string>;
  justifySelf?: Responsive<
    | 'auto'
    | 'normal'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'self-start'
    | 'self-end'
    | 'center'
    | 'left'
    | 'right'
    | 'stretch'
  >;
  alignSelf?: Responsive<
    | 'auto'
    | 'normal'
    | 'start'
    | 'end'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'self-start'
    | 'self-end'
    | 'stretch'
  >;
  order?: Responsive<number>;

  gridArea?: Responsive<string>;
  gridColumn?: Responsive<string>;
  gridRow?: Responsive<string>;
  gridColumnStart?: Responsive<string>;
  gridColumnEnd?: Responsive<string>;
  gridRowStart?: Responsive<string>;
  gridRowEnd?: Responsive<string>;

  position?: Responsive<'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'>;
  zIndex?: Responsive<number>;
  top?: Responsive<DimensionValue>;
  bottom?: Responsive<DimensionValue>;
  start?: Responsive<DimensionValue>;
  end?: Responsive<DimensionValue>;
  left?: Responsive<DimensionValue>;
  right?: Responsive<DimensionValue>;

  isHidden?: Responsive<boolean>;
}
