import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';

import update from 'immutability-helper';

import { IShoppingSale } from './api/structures/shoppings/sales/IShoppingSale';

import { IShoppingSaleUnitStock } from './api/structures/shoppings/sales/IShoppingSaleUnitStock';

import { Button, Candidate, ResultStock } from './components';

interface Props {
  sale: IShoppingSale;
}

export interface IResultStock extends IShoppingSaleUnitStock {
  count: number;
}

function App({ sale }: Props) {
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
    <div className='App'>
      <div className={'container'} style={{ width: 500 }}>
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
              count={
                resultStocks.filter((element) => element.id === stock.id).length
              }
              stock={stock}
              onDelete={onStockDelete}
              onMinus={() => onStockMinus(stock, index)}
              onPlus={() => onStockPlus(stock, index)}
            />
          );
        })}
        <div className='flexContainer'>
          <Button>장바구니</Button>
          <Button>바로구매</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
