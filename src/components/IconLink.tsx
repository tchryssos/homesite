import clsx from 'clsx';
import { useState } from 'react';

import { Email } from './icons/Email';
import { Github } from './icons/Github';
import { Medium } from './icons/Medium';
import { Open } from './icons/Open';
import { Spotify } from './icons/Spotify';
import { Vimeo } from './icons/Vimeo';
import { Link } from './Link';

const iconMap = {
  email: Email,
  github: Github,
  medium: Medium,
  open: Open,
  vimeo: Vimeo,
  spotify: Spotify,
};

export type IconType = keyof typeof iconMap;

interface Props {
  className?: string;
  icon: IconType;
  href: string;
  altText: string;
}

export function IconLink({ href, className, icon, altText }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const Icon = iconMap[icon];
  return (
    <span
      className="z-[2]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        className={clsx(
          'flex h-12 w-12 items-center justify-center',
          className,
        )}
        href={href}
      >
        <Icon
          className="h-8 w-8"
          pathClassName={isHovered ? 'fill-lighten' : 'fill-text'}
          title={altText}
          titleId={`${altText}-${icon}`}
        />
      </Link>
    </span>
  );
}
