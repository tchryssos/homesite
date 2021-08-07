import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';

import ExtLink from '~/components/ExtLink';
import IconLink from '~/components/IconLink';
import Github from '~/components/icons/Github';
import Medium from '~/components/icons/Medium';
import Open from '~/components/icons/Open';
import Vimeo from '~/components/icons/Vimeo';
import Body from '~/components/typography/Body';
import LittleTitle from '~/components/typography/LittleTitle';
import { black, white } from '~/constants/styles/colors';
import orNull from '~/logic/util/orNull';
import { useShadowStyles } from '~/logic/util/styles/shadow';

const useStyles = createUseStyles({
  block: {
    borderRadius: 4,
    backgroundColor: black,
    border: [[2, 'solid', white]],
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
    wordBreak: 'break-word',
    position: 'relative',
  },
  siteLink: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    width: '100%',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    height: 40,
    width: 40,
    marginRight: 16,
  },
  icons: {
    display: 'flex',
  },
});

interface LinkProps {
  extType: string;
  extLink: string;
  extTitle: string;
}
const OtherLink: React.FC<LinkProps> = ({ extType, extTitle, extLink }) => {
  switch (extType) {
    case 'vimeo':
      return (
        <IconLink to={extLink}>
          {(iconClass, iconColorClass) => (
            <Vimeo
              className={iconClass}
              colorClassName={iconColorClass}
              title={`Open ${extTitle}`}
              titleId={`${extLink}OpenId`}
            />
          )}
        </IconLink>
      );
    case 'medium':
      return (
        <IconLink to={extLink}>
          {(iconClass, iconColorClass) => (
            <Medium
              className={iconClass}
              colorClassName={iconColorClass}
              title={`Open ${extTitle}`}
              titleId={`${extLink}OpenId`}
            />
          )}
        </IconLink>
      );
    default:
      console.warn('This link type is not supported');
      return null;
  }
};

interface Props {
  title: string;
  text: string;
  imageAltText: string;
  imageSrc: string;
  to: string;
  toRepo?: string;
  hideLink?: boolean;
  toOthers?: {
    extType: string;
    extLink: string;
    extTitle: string;
  }[];
}

const ProjectBlock: React.FC<Props> = ({
  title,
  text,
  imageAltText,
  imageSrc,
  to,
  toRepo,
  hideLink,
  toOthers,
}) => {
  const classes = useStyles();
  const shadowClasses = useShadowStyles();
  return (
    <div
      className={clsx(
        classes.block,
        shadowClasses.shadow,
        shadowClasses.hoverShadow,
      )}
    >
      <ExtLink alt={title} className={classes.siteLink} to={to} />
      <div className={classes.header}>
        <div className={classes.headerLeft}>
          <img alt={imageAltText} className={classes.image} src={imageSrc} />
          <LittleTitle>{title}</LittleTitle>
        </div>
        <div className={classes.icons}>
          {toOthers?.map(({ extType, extLink, extTitle }) => (
            <OtherLink
              extLink={extLink}
              extTitle={extTitle}
              extType={extType}
              key={extLink}
            />
          ))}
          {orNull(
            Boolean(toRepo),
            <IconLink to={toRepo}>
              {(iconClass, iconColorClass) => (
                <Github
                  className={iconClass}
                  colorClassName={iconColorClass}
                  title={`Go to the Github repo for ${title}`}
                  titleId={`${to}GitRepoId`}
                />
              )}
            </IconLink>,
          )}
          {orNull(
            !hideLink,
            <IconLink to={to}>
              {(iconClass, iconColorClass) => (
                <Open
                  className={iconClass}
                  colorClassName={iconColorClass}
                  title={`Open ${title}`}
                  titleId={`${to}OpenId`}
                />
              )}
            </IconLink>,
          )}
        </div>
      </div>
      <Body>{text}</Body>
    </div>
  );
};

export default ProjectBlock;
