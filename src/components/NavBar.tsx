import styled from '@emotion/styled';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { createUseStyles, WithStylesProps } from 'react-jss';

import IconLink from '~/components/IconLink';
import Email from '~/components/icons/Email';
import Github from '~/components/icons/Github';
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

import FlexBox from './box/FlexBox';
import { Link } from './Link';
import { Body } from './typography/Body';
import { SubTitle } from './typography/SubTitle';

const useStyles = createUseStyles({
  // headerContainer: {
  //   display: 'flex',
  //   justifyContent: 'center',
  //   width: '100%',
  // },
  // headerWrapper: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   width: '100%',
  //   maxWidth: MD_MIN_VALUE,
  // },
  // navTopRow: {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   padding: 16,
  // },
  // nameHomeLink: {
  //   textDecoration: 'none',
  // },
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
interface NavTextProps {
  href: string;
  children: string;
  pathname: string;
}

interface NavTextComponentProps {
  isActive: boolean;
}

// START - STYLED COMPONENTS - START
const NavTextText = styled(Body)<NavTextComponentProps>(
  ({ theme, isActive }) => ({
    color: theme.colors.lighten,
    fontSize: theme.fontSize.title,
    textDecoration: 'none',
    '&:hover': {
      cursor: 'wait',
    },
    [theme.breakpointValues.sm]: {
      marginRight: theme.spacing[16],
    },
    ...(isActive && {
      textDecoration: 'underline',
      color: theme.colors.text,
    }),
  }),
);

const NavTextLink = styled(Link)<NavTextComponentProps>(
  ({ theme, isActive }) => ({
    color: theme.colors.lighten,
    fontSize: theme.fontSize.title,
    fontFamily: theme.fontFamily.decorative,
    ...(isActive && {
      textDecoration: 'underline',
      color: theme.colors.text,
    }),
  }),
);

const HeaderWrapper = styled(FlexBox)`
  width: 100%;
  max-width: ${({ theme }) => `${theme.breakpointValues.md}px`};
`;

const NameLink = styled(Link)`
  text-decoration: none;
`;
// END - STYLED COMPONENTS - END

const NavText: React.FC<NavTextProps> = ({ href, children, pathname }) => {
  const { isAnimating } = useContext(AnimationContext);
  const isActive = pathname === href;
  if (isAnimating) {
    return (
      <NavTextText isActive={isActive} variant="decorative">
        {children}
      </NavTextText>
    );
  }
  return (
    <NavTextLink href={href} isActive={isActive}>
      <Body>{children}</Body>
    </NavTextLink>
  );
};

const NavBar: React.FC = () => {
  const classes = useStyles();
  const shadowClasses = useShadowStyles();
  const { pathname } = useRouter();

  return (
    <FlexBox flex={1} justifyContent="center">
      <HeaderWrapper column>
        <FlexBox alignItems="center" justifyContent="space-between" p={16}>
          <NameLink href={HOME_PATH}>
            <SubTitle
              className={clsx(classes.nameWrapper, shadowClasses.textShadow)}
              italic
            >
              Troy Chryssos
            </SubTitle>
          </NameLink>
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
        </FlexBox>
        {/*
          @TODO Because there's only one page atm, only show the nav on some other page
          AKA the 404 page
         */}
        {pathname !== HOME_PATH && (
          <div className={classes.navWrapper}>
            <NavText href={HOME_PATH} pathname={pathname}>
              Back to Home
            </NavText>
          </div>
        )}
      </HeaderWrapper>
    </FlexBox>
  );
};

export default NavBar;
