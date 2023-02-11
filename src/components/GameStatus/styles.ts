import { styled } from 'goober';

import { BORDER, RED } from 'global-styles';

export const GameStatusStyled = styled('div')`
  display: flex;
  border-top: ${BORDER};
  align-items: center;
  justify-content: space-evenly;
  padding: 0.2rem 0.5rem;
`;

export const Header = styled('header')``;

export const CounterWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonStyled = styled('button')`
  padding: 0.5rem;
  font-size: 0.5rem;
  border: ${BORDER};
  background: ${RED};
  cursor: pointer;
  font-weight: 700;
  color: #fff;
`;
