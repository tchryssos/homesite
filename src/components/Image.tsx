import NextImage, { ImageProps as NextImageProps } from 'next/image';

interface ImageProps extends NextImageProps {}

export const Image: React.FC<ImageProps> = ({ className, ...rest }) => (
  <span className={className}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <NextImage {...rest} />
  </span>
);
