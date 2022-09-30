import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  margin: 0.5rem;
  padding: 0.2rem;
  background: var(--white);
  border: 1px solid black;
  border-radius: 5px;
`;

export const ItemsWrapper = styled.ul`
  position: absolute;
  top: 30px;
  left: -0.1rem;
  z-index: 1;
  width: 100%;
  gap: 0.5rem;
  background: var(--white);
  border: 1px solid black;
  border-radius: 5px;
`;

export const Item = styled.li`
  list-style: none;
  width: 100%;
  padding: 0.5rem;
  &:hover {
    background: var(--green);
    opacity: 0.33;
  }
`;
