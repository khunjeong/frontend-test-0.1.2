import styled from 'styled-components';

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IFlex {
  $justify: 'flex-start' | 'flex-end' | 'space-between';
  $align: 'top' | 'center' | 'bottom';
  $direction: 'row' | 'column';
  $wrap: 'wrap' | 'nowrap';
}

const FlexWrapper = styled.div<IFlex>`
  display: flex;
  width: 100%;
  justify-content: ${({ $justify }) => $justify};
  align-items: ${({ $align }) => $align};
  flex-direction: ${({ $direction }) => $direction};
  flex-wrap: ${({ $wrap }) => $wrap};
`;

export { FlexCenter, FlexWrapper };
