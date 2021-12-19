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

const StyledLink = styled.a<Pick<LinkProps, 'isInternal'>>(({ theme }) => ({
  color: theme.colors.text,
  display: 'inline-block',
  textDecoration: 'none',
  '&:hover': {
    cursor: 'pointer',
  },
}));

interface LinkHOCProps extends Pick<LinkProps, 'isInternal' | 'children'> {
  href: string;
}

const LinkHOC: React.FC<LinkHOCProps> = ({ isInternal, children, href }) => {
  if (!isInternal) {
    return <>{children}</>;
  }
  return (
    <NextLink href={href} passHref>
      {children}
    </NextLink>
  );
};

export const Link: React.FC<LinkProps> = ({
  href,
  isInternal,
  children,
  className,
  download,
  altText,
}) =>
  href ? (
    <LinkHOC href={href} isInternal={isInternal}>
      <StyledLink
        aria-label={altText}
        className={className}
        download={download}
        rel="noopener noreferrer"
        target={isInternal ? '_self' : '_blank'}
      >
        {children}
      </StyledLink>
    </LinkHOC>
  ) : (
    <>{children}</>
  );
