import { styled } from 'goober';

import { BORDER, BREAKPOINT_MD, RED } from 'global-styles';

export const GameStatusStyled = styled('div')`
  display: flex;
  border-top: ${BORDER};
  align-items: center;
  justify-content: space-evenly;
  padding: 0.2rem 0;
`;

export const CounterWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: ${BREAKPOINT_MD}) {
    font-size: 1.3rem;
  }
`;

export const ButtonStyled = styled('button')`
  padding: 0.5rem;
  font-size: 0.5rem;
  border: ${BORDER};
  background: ${RED};
  cursor: pointer;
  font-weight: 700;
  color: #fff;

  @media screen and (max-width: ${BREAKPOINT_MD}) {
    font-size: 0.7rem;
  }
`;
