import { Rows } from 'components/Rows';

import { BoardStyled, Headers } from './styles';

export const Board = () => (
  <BoardStyled>
    <Headers>
      <span>ITEM</span>
      <span>QTY</span>
      <span>SCORE</span>
    </Headers>
    <Rows />
  </BoardStyled>
);
