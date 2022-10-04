import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';

import update from 'immutability-helper';

import { IShoppingSale } from './api/structures/shoppings/sales/IShoppingSale';

import { IShoppingSaleUnit } from './api/structures/shoppings/sales/IShoppingSaleUnit';
import { IShoppingSaleUnitOption } from './api/structures/shoppings/sales/IShoppingSaleUnitOption';
import { Button, Candidate, Dropdown } from './components';
interface Props {
  sale: IShoppingSale;
}

interface ISaleResult {
  productName: string;
  unitOption: IShoppingSaleUnitOption[];
}

function App({ sale }: Props) {
  const [shoppingResult, setShoppingResult] = useState<
    {
      unitId: string;
      cadidateIds: string[];
    }[]
  >([]);
  const [options, setOptions] = useState<IShoppingSaleUnitOption[][]>([]);

  const addShoppingResult = useCallback(
    (unitId: string, cadidateIds: string[]) => {
      setShoppingResult(
        update(shoppingResult, {
          $push: [
            {
              unitId,
              cadidateIds,
            },
          ],
        })
      );
    },
    [shoppingResult]
  );

  useEffect(() => {
    console.log({ sale });
    setOptions(sale.units.map((unit) => unit.options));
  }, [sale]);

  // useEffect(() => {
  //   console.log('1111', shoppingResult);
  // }, [shoppingResult]);

  return (
    <div className='App'>
      <div className={'container'} style={{ width: 500 }}>
        {sale.units.map((unit, index) => {
          const { id, product } = unit;
          return (
            <Candidate
              key={id}
              unit={unit}
              onAddShopping={(unitSelectOptions) => {
                console.log({ unitSelectOptions });
              }}
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
