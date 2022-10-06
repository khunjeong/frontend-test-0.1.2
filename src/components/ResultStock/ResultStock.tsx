import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';

import * as S from './ResultStock.styled';

import { IDropdownProps } from './ResultStock.type';

const ResultStock = (props: IDropdownProps) => {
  const { count, stock, onDelete, onMinus, onPlus } = props;

  return (
    <S.ResultStockWrapper>
      <S.ResultStockRow style={{ marginBottom: '0.5rem' }}>
        <S.NameSpan>{stock.name}</S.NameSpan>
        <S.CloseWrapper onClick={() => onDelete(stock)}>
          <CloseIcon />
        </S.CloseWrapper>
      </S.ResultStockRow>
      <S.ResultStockRow>
        <S.FlexRow>
          <S.IconWrapper onClick={() => onMinus(stock)}>
            <PlusIcon />
          </S.IconWrapper>
          {stock.inventory.reserve}
          <S.IconWrapper onClick={() => onPlus(stock)}>
            <PlusIcon />
          </S.IconWrapper>
        </S.FlexRow>
        <S.PriceSpan>{stock.price.real} 원</S.PriceSpan>
      </S.ResultStockRow>
    </S.ResultStockWrapper>
  );
};

export default ResultStock;