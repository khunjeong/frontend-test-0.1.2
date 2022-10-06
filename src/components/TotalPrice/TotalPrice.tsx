import { FlexWrapper } from '../Wrapper';

import * as S from './TotalPrice.styled';

import { ITotalPriceProps } from './TotalPrice.type';

const TotalPrice = (props: ITotalPriceProps) => {
  const { totalPrice } = props;

  return (
    <S.TotalPriceWrapper>
      <S.TotalPriceTitle>주문금액</S.TotalPriceTitle>
      <div style={{ fontWeight: 500 }}>
        <S.TotalPriceSpan>{totalPrice.toLocaleString()}</S.TotalPriceSpan>원
      </div>
    </S.TotalPriceWrapper>
  );
};

export default TotalPrice;
