import styled from '@emotion/styled';

import { Icon } from '~/components/icons/Icon';

import { IconProps } from './types';

const Path = styled.path<Pick<IconProps, 'color'>>`
  fill: ${({ color = 'text', theme }) => theme.colors[color]};
`;

export const Open: React.FC<IconProps> = ({
  className,
  title,
  titleId,
  color,
}) => (
  <Icon className={className} title={title} titleId={titleId}>
    <Path
      color={color}
      d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7z"
    />
  </Icon>
);
