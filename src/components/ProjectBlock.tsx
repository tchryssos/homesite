import { IconLink, IconType } from '~/components/IconLink';
import { Image } from '~/components/Image';
import { Body } from '~/components/typography/Body';
import { SubExtends } from '~/typings/util';

import { Link } from './Link';
import { SubTitle } from './typography/SubTitle';

interface Props {
  title: string;
  text: string;
  imageAltText: string;
  imageSrc: string;
  to: string;
  toRepo?: string;
  hideLink?: boolean;
  toOthers?: {
    extType: SubExtends<IconType, 'medium' | 'vimeo'>;
    extLink: string;
    extTitle: string;
  }[];
}

export function ProjectBlock({
  title,
  text,
  imageAltText,
  imageSrc,
  to,
  toRepo,
  hideLink,
  toOthers,
}: Props) {
  return (
    <div className="relative flex flex-col break-words rounded-s border-2 border-solid border-text bg-background p-2 shadow-md shadow-primaryHeavy hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg">
      <Link
        className="absolute left-0 top-0 h-full w-full"
        href={to}
        title={title}
      />
      <div className="mb-2 flex content-between items-center">
        <div className="flex items-center gap-2">
          <Image alt={imageAltText} height={40} src={imageSrc} width={40} />
          <SubTitle>{title}</SubTitle>
        </div>
        <div className="flex">
          {toOthers?.map(({ extType, extLink, extTitle }) => (
            <IconLink
              altText={extTitle}
              href={extLink}
              icon={extType}
              key={extLink}
            />
          ))}
          {Boolean(toRepo) && (
            <IconLink
              altText={`Go to the Github repo for ${title}`}
              href={toRepo!}
              icon="github"
            />
          )}
          {!hideLink && (
            <IconLink altText={`Open ${title}`} href={to} icon="open" />
          )}
        </div>
      </div>
      <Body>{text}</Body>
    </div>
  );
}
