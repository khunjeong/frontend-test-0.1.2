import { HTMLAttributes } from 'react';
import * as S from './Button.styled';

const Button = (props: S.IStyleProps & HTMLAttributes<HTMLButtonElement>) => {
  const { btnType, children, ...rest } = props;

  return (
    <S.Button btnType={btnType || 'default'} {...rest}>
      {children}
    </S.Button>
  );
};

export default Button;
