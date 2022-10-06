import styled from 'styled-components';

export const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-top: 1px solid var(--gray);
`;

export const TotalPriceTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: var(--gray);
`;

export const TotalPriceSpan = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: var(--black);
`;
