import styled from 'styled-components';

export const ResultStockWrapper = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  padding: 1rem;
  background: var(--lightGray);
  border: none;
  border-radius: 5px;
`;

export const ResultStockRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 16px;
  font-weight: 700;
  color: var(--green);
`;

export const NameSpan = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: var(--dark);
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background: var(--gray);
  border-radius: 50%;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background: var(--white);
  border-radius: 50%;
  cursor: pointer;
`;

export const PriceSpan = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: var(--dark);
`;
