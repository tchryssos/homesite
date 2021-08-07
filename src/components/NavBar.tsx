import clsx from 'clsx';
import React, { useContext } from 'react';
import { createUseStyles, WithStylesProps } from 'react-jss';
import { NavLink, useLocation } from 'react-router-dom';

import IconLink from '~/components/IconLink';
import Email from '~/components/icons/Email';
import Github from '~/components/icons/Github';
import LittleTitle from '~/components/typography/LittleTitle';
import { HOME_PATH } from '~/constants/routes';
import {
  MD_MIN_STRING,
  MD_MIN_VALUE,
  SM_MIN_STRING,
} from '~/constants/styles/breakpoints';
import { black, dimmedWhite, white } from '~/constants/styles/colors';
import { monoFont } from '~/constants/styles/fonts';
import AnimationContext from '~/logic/contexts/animation';
import { useShadowStyles } from '~/logic/util/styles/shadow';

const useStyles = createUseStyles({
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: MD_MIN_VALUE,
  },
  navTopRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  nameHomeLink: {
    textDecoration: 'none',
  },
  nameWrapper: {
    fontStyle: 'italic',
  },
  navIcons: {
    display: 'flex',
    alignItems: 'center',
  },
  navWrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 16,
    [SM_MIN_STRING]: {
      paddingLeft: 16,
      justifyContent: 'flex-start',
    },
    [MD_MIN_STRING]: {
      textShadow: [[2, -2, black]],
    },
  },
  link: {
    fontFamily: monoFont,
    color: dimmedWhite,
    fontSize: 32,
    textDecoration: 'none',
    [SM_MIN_STRING]: {
      marginRight: 16,
    },
  },
  navActive: {
    textDecoration: [['underline'], '!important'],
    color: white,
  },
  disabledLink: {
    '&:hover': {
      cursor: 'wait',
    },
  },
});
interface Props extends WithStylesProps<typeof useStyles> {
  to: string;
  children: React.ReactNode;
}

const NavText: React.FC<Props> = ({ to, classes, children }) => {
  const { pathname } = useLocation();
  const { isAnimating } = useContext(AnimationContext);
  if (isAnimating) {
    return (
      <p
        className={clsx(classes.link, classes.disabledLink, {
          [classes.navActive]: pathname === to,
        })}
      >
        {children}
      </p>
    );
  }
  return (
    <NavLink
      activeClassName={classes.navActive}
      className={classes.link}
      exact
      to={to}
    >
      {children}
    </NavLink>
  );
};

const NavBar: React.FC = () => {
  const classes = useStyles();
  const shadowClasses = useShadowStyles();
  return (
    <div className={classes.headerContainer}>
      <div className={classes.headerWrapper}>
        <div className={classes.navTopRow}>
          <NavLink className={classes.nameHomeLink} to={HOME_PATH}>
            <LittleTitle
              className={clsx(classes.nameWrapper, shadowClasses.textShadow)}
            >
              Troy Chryssos
            </LittleTitle>
          </NavLink>
          <div className={classes.navIcons}>
            <IconLink to="mailto:troychryssos@gmail.com">
              {(iconClass, iconColorClass) => (
                <Email
                  className={iconClass}
                  colorClassName={iconColorClass}
                  title="Email me"
                  titleId="navMailId"
                />
              )}
            </IconLink>
            <IconLink to="https://github.com/tchryssos">
              {(iconClass, iconColorClass) => (
                <Github
                  className={iconClass}
                  colorClassName={iconColorClass}
                  title="Go to my Github profile"
                  titleId="navGithubId"
                />
              )}
            </IconLink>
          </div>
        </div>
        <div className={classes.navWrapper}>
          <NavText classes={classes} to={HOME_PATH}>
            Portfolio
          </NavText>
          {/* @TODO About page needs a better reason to exist */}
          {/* <NavText classes={classes} to={ABOUT_PATH}>
            About
          </NavText> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
