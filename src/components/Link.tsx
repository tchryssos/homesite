import clsx from 'clsx';
import NextLink from 'next/link';
import { ComponentProps } from 'react';

interface LinkProps extends ComponentProps<typeof NextLink> {
  href: string;
  isInternal?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Link({
  href,
  isInternal = true,
  children,
  className,
  onClick,
  ...rest
}: LinkProps) {
  return (
    <NextLink
      className={clsx(className, 'display-inline-block text-text')}
      href={href}
      rel="noopener noreferrer"
      target={isInternal ? '_self' : '_blank'}
      onClick={onClick}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </NextLink>
  );
}
