import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import IconLink from '~/components/IconLink';
import Email from '~/components/icons/Email';
import Github from '~/components/icons/Github';
import { HOME_PATH } from '~/constants/routes';
import AnimationContext from '~/logic/contexts/animation';
import { pxToRem } from '~/logic/util/styles/pxToRem';

import FlexBox from './box/FlexBox';
import { Link } from './Link';
import { Body } from './typography/Body';
import { SubTitle } from './typography/SubTitle';

// START - STYLED COMPONENTS - START
interface NavTextComponentProps {
  isActive: boolean;
}

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

const NavWrapper = styled(FlexBox)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing[16],
  justifyContent: 'space-evenly',
  [theme.breakpoints.sm]: {
    paddingLeft: theme.spacing[16],
    justifyContent: 'flex-start',
  },
  [theme.breakpoints.md]: {
    textShadow: `${pxToRem(2)} ${pxToRem(-2)} ${theme.colors.background}`,
  },
}));
// END - STYLED COMPONENTS - END

interface NavTextProps {
  href: string;
  children: string;
  pathname: string;
}

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

export const NavBar: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <FlexBox flex={1} justifyContent="center">
      <HeaderWrapper column>
        <FlexBox alignItems="center" justifyContent="space-between" p={16}>
          <NameLink href={HOME_PATH}>
            <SubTitle italic shadowed>
              Troy Chryssos
            </SubTitle>
          </NameLink>
          <FlexBox alignItems="center">
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
          </FlexBox>
        </FlexBox>
        {/*
          @TODO Because there's only one page atm, only show the nav on some other page
          AKA the 404 page
         */}
        {pathname !== HOME_PATH && (
          <NavWrapper>
            <NavText href={HOME_PATH} pathname={pathname}>
              Back to Home
            </NavText>
          </NavWrapper>
        )}
      </HeaderWrapper>
    </FlexBox>
  );
};
