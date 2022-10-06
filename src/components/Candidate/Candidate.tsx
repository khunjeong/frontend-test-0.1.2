import React, { useEffect, useMemo, useState } from 'react';

import update from 'immutability-helper';

import { Dropdown } from '../../components';

import { IShoppingSaleUnit } from '../../api/structures/shoppings/sales/IShoppingSaleUnit';
import { IShoppingSaleUnitOptionCandidate } from '../../api/structures/shoppings/sales/IShoppingSaleUnitOptionCandidate';
import { IShoppingSaleUnitStock } from '../../api/structures/shoppings/sales/IShoppingSaleUnitStock';

import * as S from './Candidate.styled';

interface ICandidatesResult extends IShoppingSaleUnitOptionCandidate {
  optionId: string;
}
const Candidate = ({
  unit,
  onAddShopping,
}: {
  unit: IShoppingSaleUnit;
  onAddShopping: (unitStock: IShoppingSaleUnitStock) => void;
}) => {
  const [selectCandidates, setSelectCandidates] = useState<ICandidatesResult[]>(
    []
  );
  const stockElements = useMemo(
    () => unit.stocks.map((stock) => stock.elements),
    [unit]
  );

  useEffect(() => {
    if (
      stockElements.length &&
      unit.options.length === selectCandidates.length
    ) {
      const stockIndex = stockElements.reduce(
        (result: number, elements, index) => {
          const jsonSelectCandidates = selectCandidates.reduce(
            (result: string[], candidate) => {
              result.push(
                JSON.stringify({
                  option_id: candidate.optionId,
                  candidate_id: candidate.id,
                })
              );
              return result;
            },
            []
          );
          const jsonElements = elements.map((element) =>
            JSON.stringify(element)
          );
          const filterStock = jsonSelectCandidates.filter((candidate) =>
            jsonElements.includes(candidate)
          );
          if (filterStock.length === selectCandidates.length) {
            result = index;
          }

          return result;
        },
        -1
      );
      if (stockIndex >= 0) {
        onAddShopping(unit.stocks[stockIndex]);
      }
    }
  }, [stockElements, selectCandidates]);

  return (
    <S.CandidateWrapper>
      <span>{`${unit.name}`}</span>
      {unit.options.map((option, index) => {
        const selectIndex = selectCandidates.findIndex(
          (candidate) => candidate.optionId === option.id
        );
        return (
          <Dropdown
            key={option.id}
            name={option.name}
            value={selectCandidates[selectIndex]}
            candidates={option.candidates}
            onUpdateBlock={(data) => {
              if (selectIndex !== -1) {
                if (!(selectCandidates[selectIndex].id === data.id)) {
                  setSelectCandidates(
                    update(selectCandidates, {
                      [selectIndex]: {
                        $set: {
                          id: data.id,
                          name: data.name,
                          images: data.images,
                          optionId: option.id,
                        },
                      },
                    })
                  );
                }
              } else {
                setSelectCandidates([
                  ...selectCandidates,
                  { optionId: option.id, ...data },
                ]);
              }
            }}
          />
        );
      })}
    </S.CandidateWrapper>
  );
};

export default Candidate;
