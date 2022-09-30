import React, { HTMLAttributes } from 'react';
import * as S from './Button.styled';

const Button = (props: HTMLAttributes<HTMLButtonElement>) => {
  const { children, ...rest } = props;

  return <S.Button {...rest}>{children}</S.Button>;
};

export default Button;
