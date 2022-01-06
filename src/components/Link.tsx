import styled from '@emotion/styled';
import NextLink from 'next/link';

interface LinkProps {
  href: string | undefined;
  isInternal?: boolean;
  children?: React.ReactNode;
  className?: string;
  download?: boolean;
  altText: string;
}

const StyledLink = styled.a(({ theme }) => ({
  color: theme.colors.text,
  display: 'inline-block',
  textDecoration: 'none',
  '&:hover': {
    cursor: 'pointer',
  },
}));

export const Link: React.FC<LinkProps> = ({
  href,
  isInternal,
  children,
  className,
  download,
  altText,
}) =>
  href ? (
    <NextLink href={href} passHref>
      <StyledLink
        aria-label={altText}
        className={className}
        download={download}
        rel="noopener noreferrer"
        target={isInternal ? '_self' : '_blank'}
      >
        {children}
      </StyledLink>
    </NextLink>
  ) : (
    <>{children}</>
  );
