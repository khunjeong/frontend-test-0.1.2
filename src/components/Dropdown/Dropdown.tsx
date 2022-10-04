import { useState } from 'react';

import * as S from './Dropdown.styled';

import { IDropdownProps } from './Dropdown.type';

const Dropdown = (props: IDropdownProps) => {
  const { name, value, candidates, onUpdateBlock } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <S.DropdownWrapper onClick={() => setIsOpen((isOpen) => !isOpen)}>
      <span>{`${name} / ${value ? value.name : ''}`} </span>
      {isOpen && (
        <S.ItemsWrapper>
          {candidates.map((candidate) => {
            return (
              <S.Item
                key={candidate.id}
                onClick={() => onUpdateBlock(candidate)}
              >
                {candidate.name}
              </S.Item>
            );
          })}
        </S.ItemsWrapper>
      )}
    </S.DropdownWrapper>
  );
};

export default Dropdown;
