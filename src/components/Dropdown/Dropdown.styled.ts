import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0;
  padding: 1rem;
  background: var(--white);
  border: 1px solid var(--gray);
  border-radius: 5px;
`;

export const ItemsWrapper = styled.ul`
  position: absolute;
  top: 50px;
  left: 0px;
  z-index: 1;
  width: 100%;
  gap: 0.5rem;
  background: var(--white);
  border: 1px solid var(--gray);
  border-radius: 5px;
`;

export const Item = styled.li`
  list-style: none;
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--lightGray);
  &:hover {
    background: var(--green);
    opacity: 0.33;
  }
`;
