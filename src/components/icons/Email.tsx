import styled from '@emotion/styled';

import { Icon } from '~/components/icons/Icon';

import { IconProps } from './types';

const Path = styled.path<Pick<IconProps, 'color'>>`
  fill: ${({ color = 'text', theme }) => theme.colors[color]};
`;

export const Email: React.FC<IconProps> = ({
  className,
  title,
  titleId,
  color,
}) => (
  <Icon className={className} title={title} titleId={titleId}>
    <Path
      color={color}
      d="M20 8l-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z"
    />
  </Icon>
);
