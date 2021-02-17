import React, { ButtonHTMLAttributes } from 'react';
import Container from './styled';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  type?: 'submit' | 'button';
  width: string;
  withMarginTop?: boolean;
  onClick: () => void;
};

const Button: React.FC<IButtonProps> = ({
  children, loading, type, width, withMarginTop = true, onClick, ...rest
}) => (
  <Container
    type={type}
    onClick={onClick}
    width={width}
    withMarginTop={withMarginTop}
    {...rest}
  >
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
