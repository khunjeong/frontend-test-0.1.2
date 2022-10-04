import React, { useEffect, useState } from 'react';

import update from 'immutability-helper';

import { Dropdown } from '../../components';

import { IShoppingSaleUnit } from '../../api/structures/shoppings/sales/IShoppingSaleUnit';
import { IShoppingSaleUnitOption } from '../../api/structures/shoppings/sales/IShoppingSaleUnitOption';
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
  onAddShopping: (
    unitSelectOptions: IShoppingSaleUnitOptionCandidate[]
  ) => void;
}) => {
  const [selectCandidates, setSelectCandidates] = useState<ICandidatesResult[]>(
    []
  );

  useEffect(() => {
    if (unit.options.length === selectCandidates.length) {
      onAddShopping(selectCandidates);
    }
  }, [selectCandidates]);

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
