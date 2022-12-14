import React, { useCallback, useEffect, useMemo, useState } from 'react';

import update from 'immutability-helper';

import {
  Button,
  Candidate,
  FlexWrapper,
  ResultStock,
  TotalPrice,
} from '../../components';

import * as S from './Sale.styled';

import { IShoppingSaleUnitStock } from '../../api/structures/shoppings/sales/IShoppingSaleUnitStock';
import { ISaleProps } from './Sale.type';

const Sale = (props: ISaleProps) => {
  const { sale } = props;

  const [resultStocks, setResultStocks] = useState<IShoppingSaleUnitStock[]>(
    []
  );

  const addShoppingResult = useCallback(
    (unitStock: IShoppingSaleUnitStock) => {
      const findShoppingIndex = resultStocks.findIndex(
        (element) => element.id === unitStock.id
      );
      if (findShoppingIndex >= 0) {
        window.alert('이미 포함되어 있는 항목입니다.');
      } else {
        setResultStocks([
          ...resultStocks,
          {
            ...unitStock,
            inventory: {
              income: unitStock.inventory.income - 1,
              reserve: unitStock.inventory.reserve + 1,
              outcome: unitStock.inventory.outcome,
            },
          },
        ]);
      }
    },
    [resultStocks]
  );

  const onStockDelete = (stock: IShoppingSaleUnitStock) => {
    setResultStocks(resultStocks.filter((element) => element.id !== stock.id));
  };

  const onStockMinus = (stock: IShoppingSaleUnitStock, index: number) => {
    setResultStocks(
      update(resultStocks, {
        [index]: {
          inventory: {
            $set: {
              income: stock.inventory.income + 1,
              reserve: stock.inventory.reserve - 1,
              outcome: stock.inventory.outcome,
            },
          },
        },
      })
    );
  };

  const onStockPlus = (stock: IShoppingSaleUnitStock, index: number) => {
    setResultStocks(
      update(resultStocks, {
        [index]: {
          inventory: {
            $set: {
              income: stock.inventory.income - 1,
              reserve: stock.inventory.reserve + 1,
              outcome: stock.inventory.outcome,
            },
          },
        },
      })
    );
  };

  useEffect(() => {
    console.log({ sale });
  }, [sale]);

  useEffect(() => {
    if (resultStocks.length) {
      console.log(resultStocks);
    }
  }, [resultStocks]);

  return (
    <S.SaleWrapper>
      {sale.units.map((unit) => (
        <Candidate
          key={unit.id}
          unit={unit}
          onAddShopping={(unitStock) => addShoppingResult(unitStock)}
        />
      ))}
      {resultStocks.map((stock, index) => {
        return (
          <ResultStock
            key={stock.id}
            stock={stock}
            onDelete={onStockDelete}
            onMinus={() => onStockMinus(stock, index)}
            onPlus={() => onStockPlus(stock, index)}
          />
        );
      })}
      {resultStocks.length ? (
        <TotalPrice
          totalPrice={resultStocks.reduce((result, stock) => {
            return result + stock.price.nominal * stock.inventory.reserve;
          }, 0)}
        />
      ) : null}

      <FlexWrapper style={{ marginTop: '1rem', gap: '1rem' }}>
        <Button>장바구니</Button>
        <Button btnType='solid'>바로구매</Button>
      </FlexWrapper>
    </S.SaleWrapper>
  );
};

export default Sale;
