import { useRef, useState } from 'react';

import { ReactComponent as ArrowDownIcon } from '../../assets/icons/arrowDown.svg';

import useClickOutside from '../../hooks/useClickOutside';

import * as S from './Dropdown.styled';

import { IDropdownProps } from './Dropdown.type';

const Dropdown = (props: IDropdownProps) => {
  const { name, value, candidates, onUpdateBlock } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);

  useClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <S.DropdownWrapper ref={ref} onClick={() => setIsOpen((isOpen) => !isOpen)}>
      <span>{`${name} / ${value ? value.name : ''}`} </span>
      <ArrowDownIcon />
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
