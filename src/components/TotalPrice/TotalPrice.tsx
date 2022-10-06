import * as S from './TotalPrice.styled';

import { ITotalPriceProps } from './TotalPrice.type';

const TotalPrice = (props: ITotalPriceProps) => {
  const { totalPrice } = props;

  return (
    <S.TotalPriceWrapper>
      <S.TotalPriceTitle>주문금액</S.TotalPriceTitle>
      <S.TotalPriceSpan>{totalPrice}</S.TotalPriceSpan>
    </S.TotalPriceWrapper>
  );
};

export default TotalPrice;
