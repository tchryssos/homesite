import styled from '@emotion/styled';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  isTransparent?: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const StyledButton = styled.button<Pick<ButtonProps, 'isTransparent'>>(
  ({ theme, isTransparent }) => ({
    border: isTransparent
      ? 'none'
      : `${theme.border.borderWidth[1]} solid ${theme.colors.text}`,
    borderRadius: theme.border.borderRadius.rounded,
    backgroundColor: 'transparent',
    '&:disabled': {
      borderColor: theme.colors.textHover,
    },
  }),
);

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  isTransparent,
  onClick,
  disabled,
}) => (
  <StyledButton
    className={className}
    disabled={disabled}
    isTransparent={isTransparent}
    type="button"
    onClick={onClick}
  >
    {children}
  </StyledButton>
);
