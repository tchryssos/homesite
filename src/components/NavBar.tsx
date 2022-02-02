import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import { IconLink } from '~/components/IconLink';
import { ABOUT_PATH, HOME_PATH } from '~/constants/routes';
import { AnimationContext } from '~/logic/contexts/animation';
import { pxToRem } from '~/logic/util/styles/pxToRem';

import { FlexBox } from './box/FlexBox';
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

const NavLinkText = styled(Body)<NavTextComponentProps>(
  ({ theme, isActive }) => ({
    color: theme.colors.lighten,
    fontSize: theme.fontSize.title,
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
  gap: theme.spacing[16],
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
    <Link altText={children} href={href} isInternal>
      <NavLinkText isActive={isActive} variant="decorative">
        {children}
      </NavLinkText>
    </Link>
  );
};

export const NavBar: React.FC = () => {
  const { pathname } = useRouter();
  return (
    <FlexBox flex={1} justifyContent="center">
      <HeaderWrapper column>
        <FlexBox alignItems="center" justifyContent="space-between" p={16}>
          <NameLink
            altText="Troy Chryssos home link"
            href={HOME_PATH}
            isInternal
          >
            <SubTitle italic shadowed>
              Troy Chryssos
            </SubTitle>
          </NameLink>
          <FlexBox alignItems="center">
            <IconLink
              altText="Email me"
              href="mailto:troychryssos@gmail.com"
              icon="email"
            />
            <IconLink
              altText="Go to my Github profile"
              href="https://github.com/tchryssos"
              icon="github"
            />
          </FlexBox>
        </FlexBox>
        <NavWrapper>
          <NavText href={HOME_PATH} pathname={pathname}>
            Home
          </NavText>
          <NavText href={ABOUT_PATH} pathname={pathname}>
            About
          </NavText>
        </NavWrapper>
      </HeaderWrapper>
    </FlexBox>
  );
};
