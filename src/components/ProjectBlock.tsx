import styled from '@emotion/styled';

import { IconLink, IconType } from '~/components/IconLink';
import { Image } from '~/components/Image';
import { Body } from '~/components/typography/Body';
import { pxToRem } from '~/logic/util/styles/pxToRem';
import { SubExtends } from '~/typings/util';

import { FlexBox } from './box/FlexBox';
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

const Block = styled(FlexBox)(({ theme }) => ({
  borderRadius: theme.border.borderRadius.rounded,
  backgroundColor: theme.colors.background,
  border: `${theme.border.borderWidth[2]} solid ${theme.colors.text}`,
  wordBreak: 'break-word',
  position: 'relative',
  boxShadow: `${theme.spacing[4]} ${theme.spacing[4]} ${theme.colors.primaryHeavy}`,
  '&:hover': {
    transform: `translate(${pxToRem(-4)}, ${pxToRem(-4)})`,
    boxShadow: `${theme.spacing[8]} ${theme.spacing[8]} ${theme.colors.primaryHeavy}`,
  },
}));

const ProjectLink = styled(Link)`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const ProjectIcon = styled(Image)`
  margin-right: ${({ theme }) => theme.spacing[8]};
`;

export const ProjectBlock: React.FC<Props> = ({
  title,
  text,
  imageAltText,
  imageSrc,
  to,
  toRepo,
  hideLink,
  toOthers,
}) => (
  <Block column p={8}>
    <ProjectLink altText={title} href={to} />
    <FlexBox alignItems="center" justifyContent="space-between" mb={8}>
      <FlexBox alignItems="center">
        <ProjectIcon alt={imageAltText} height={40} src={imageSrc} width={40} />
        <SubTitle>{title}</SubTitle>
      </FlexBox>
      <FlexBox>
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
            href={toRepo}
            icon="github"
          />
        )}
        {!hideLink && (
          <IconLink altText={`Open ${title}`} href={to} icon="open" />
        )}
      </FlexBox>
    </FlexBox>
    <Body>{text}</Body>
  </Block>
);
