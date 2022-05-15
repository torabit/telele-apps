import React from 'react';
import Link from 'next/link';
import Image from 'next/dist/client/image';

export const SquareImageSizes = {
  XSMALL: 'var(--square-card-size-xsmall)',
  SMALL: 'var(--square-card-size-small)',
  MEDIUM: 'var(--square-card-size-medium)',
  LARGE: 'var(--square-card-size-large)',
  XLARGE: 'var(--square-card-size-xlarge)',
} as const;

export interface SquareImageProps {
  src: string;
  size: keyof typeof SquareImageSizes;
  url: string;
  alt: string;
}

export const SquareImage: React.VFC<SquareImageProps> = (props) => {
  const { src, size, url, alt } = props;
  return (
    <>
      <Link href={url}>
        <div className='square-image' tabIndex={0}>
          <Image
            alt={`${alt}のカバー画像`}
            role='link'
            aria-hidden={true}
            src={src}
            layout='fill'
            objectFit='contain'
          />
          <div className='square-image-interaction mouse-over' />
        </div>
      </Link>
      <style jsx>{`
        .square-image-interaction {
          position: absolute;
          width: inherit;
          height: inherit;
        }
        .square-image {
          position: relative;
          overflow: hidden;
          border-radius: var(--border-radius-extra-large);
          user-select: none;
          width: ${SquareImageSizes[size]};
          height: ${SquareImageSizes[size]};
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
