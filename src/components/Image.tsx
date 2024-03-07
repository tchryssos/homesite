import NextImage, { ImageProps as NextImageProps } from 'next/image';

interface ImageProps extends NextImageProps {}

export function Image({ className, ...rest }: ImageProps) {
  return (
    <span className={className}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <NextImage {...rest} />
    </span>
  );
}
