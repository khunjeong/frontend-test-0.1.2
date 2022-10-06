import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';

import update from 'immutability-helper';

import { IShoppingSale } from './api/structures/shoppings/sales/IShoppingSale';

import { IShoppingSaleUnit } from './api/structures/shoppings/sales/IShoppingSaleUnit';
import { IShoppingSaleUnitOption } from './api/structures/shoppings/sales/IShoppingSaleUnitOption';
import { IShoppingSaleUnitStock } from './api/structures/shoppings/sales/IShoppingSaleUnitStock';

import { Button, Candidate } from './components';

interface Props {
  sale: IShoppingSale;
}

function App({ sale }: Props) {
  const [shoppingResult, setShoppingResult] = useState<
    IShoppingSaleUnitStock[]
  >([]);

  const addShoppingResult = useCallback(
    (unitStock: IShoppingSaleUnitStock) => {
      const findShoppingIndex = shoppingResult.findIndex(
        (element) => element.id === unitStock.id
      );
      if (findShoppingIndex >= 0) {
        // setShoppingResult(
        //   update(shoppingResult, {
        //     $splice: [[findShoppingIndex, 1]],
        //   })
        // );
        // setShoppingResult([...shoppingResult, unitStock]);
        window.alert('이미 포함되어 있는 항목입니다.');
      } else {
        setShoppingResult([...shoppingResult, unitStock]);
      }
    },
    [shoppingResult]
  );

  useEffect(() => {
    // console.log({ sale });
  }, [sale]);

  useEffect(() => {
    if (shoppingResult.length) {
      console.log(shoppingResult);
    }
  }, [shoppingResult]);

  return (
    <div className='App'>
      <div className={'container'} style={{ width: 500 }}>
        {sale.units.map((unit, index) => {
          const { id, product } = unit;
          return (
            <Candidate
              key={id}
              unit={unit}
              onAddShopping={(unitStock) => addShoppingResult(unitStock)}
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
