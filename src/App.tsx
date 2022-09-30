import React, { useEffect, useMemo, useState } from 'react';
import './App.css';

import { IShoppingSale } from './api/structures/shoppings/sales/IShoppingSale';

import { IShoppingSaleUnit } from './api/structures/shoppings/sales/IShoppingSaleUnit';
import { IShoppingSaleUnitOption } from './api/structures/shoppings/sales/IShoppingSaleUnitOption';

import { Button, Dropdown } from './components';
interface Props {
  sale: IShoppingSale;
}

interface ISaleResult {
  productName: string;
  unitOption: IShoppingSaleUnitOption[];
}

function App({ sale }: Props) {
  console.log({ sale });
  const [shoppingResult, setShoppingResult] = useState<
    IShoppingSaleUnitOption[]
  >([]);
  const [options, setOptions] = useState<IShoppingSaleUnitOption[][]>([]);

  useEffect(() => {
    setOptions(sale.units.map((unit) => unit.options));
  }, [sale]);

  useEffect(() => {
    console.log(options[0]);
  }, [options]);

  return (
    <div className='App'>
      <div className={'container'} style={{ width: 500 }}>
        {sale.units.map((unit, index) => {
          const { id, product } = unit;
          return (
            <div key={id}>
              <span>{product.name}</span>
              <>
                {options.length &&
                  options[index].map((option) => (
                    <Dropdown
                      key={option.id}
                      name={option.name}
                      value={option.candidates[0]}
                      candidates={option.candidates}
                      onUpdateBlock={(data) => {
                        console.log({ data });
                      }}
                    />
                  ))}
              </>
            </div>
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
