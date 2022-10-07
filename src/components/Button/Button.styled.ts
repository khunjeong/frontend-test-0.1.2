import styled, { css } from 'styled-components';

export interface IStyleProps {
  btnType?: keyof typeof buttonType;
}

const buttonType = {
  solid: css`
    background: var(--green);
    color: var(--white);
    border: none;

    &:hover {
      opacity: 0.5;
      box-shadow: none;
      outline: none;
      color: var(--white);
    }
  `,
  default: css`
    background: none;
    color: var(--gray);
    border: 1px solid var(--gray);

    &:hover {
      background: var(--lightGray);
      border: 1px solid var(--darkGray);
      box-shadow: none;
      outline: none;
      color: var(--gray);
    }
  `,
};

export const Button = styled.button<IStyleProps>`
  ${({ btnType }) => btnType && buttonType[btnType]}
  width: 100%;
  height: 36px;
  padding: 0 5px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
