import styled from '@emotion/styled';
import { useState } from 'react';

import { Email } from './icons/Email';
import { Github } from './icons/Github';
import { Medium } from './icons/Medium';
import { Open } from './icons/Open';
import { Vimeo } from './icons/Vimeo';
import { Link } from './Link';

const iconMap = {
  email: Email,
  github: Github,
  medium: Medium,
  open: Open,
  vimeo: Vimeo,
};

export type IconType = keyof typeof iconMap;

interface Props {
  className?: string;
  icon: IconType;
  href: string | undefined;
  altText: string;
}

const StyledLink = styled(Link)(({ theme }) => ({
  height: theme.spacing[40],
  width: theme.spacing[40],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  zIndex: 2,
}));

export const IconLink: React.FC<Props> = ({
  href,
  className,
  icon,
  altText,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const Icon = iconMap[icon];
  const StyledIcon = styled(Icon)(({ theme }) => ({
    height: theme.spacing[24],
    width: theme.spacing[24],
  }));
  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <StyledLink altText={altText} className={className} href={href}>
        <StyledIcon
          color={isHovered ? 'lighten' : 'text'}
          title={altText}
          titleId={`${altText}-${icon}`}
        />
      </StyledLink>
    </span>
  );
};
