import { PropsWithChildren } from 'react';
import * as S from './Wrapper.style';

interface props {
  style?: React.CSSProperties;
  justify?: 'flex-start' | 'flex-end' | 'space-between';
  align?: 'top' | 'center' | 'bottom';
  direction?: 'row' | 'column';
  wrap?: 'wrap' | 'nowrap';
  className?: string;
  onClick?: () => void;
}

export const FlexCenter = (props: PropsWithChildren<props>) => {
  const { style, children, className, onClick } = props;
  return (
    <S.FlexCenter className={className} style={style} onClick={onClick}>
      {children}
    </S.FlexCenter>
  );
};

export const FlexWrapper = (props: PropsWithChildren<props>) => {
  const {
    style,
    justify,
    align,
    direction,
    wrap,
    children,
    className,
    onClick,
  } = props;
  return (
    <S.FlexWrapper
      $justify={justify || 'flex-start'}
      $align={align || 'center'}
      $direction={direction || 'row'}
      $wrap={wrap || 'nowrap'}
      className={className}
      onClick={onClick}
      style={style}
    >
      {children}
    </S.FlexWrapper>
  );
};
