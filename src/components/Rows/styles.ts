import { styled } from 'goober';

import { BORDER, RED } from 'global-styles';

export const RowsStyled = styled('div')`
  flex: 1;
  overflow-y: scroll;
`;

export const RowStyled = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  border-bottom: 3px solid ${RED};
  padding: 0.3rem 0.1rem 0.3rem 0.5rem;
`;

export const ItemStyled = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${RED};
  width: 2rem;
  height: 2rem;
  border: ${BORDER};
  font-weight: 700;
  font-size: 1rem;
  user-select: none;
  margin: 0 auto;
`;

export const QuantityStyled = styled('div')`
  margin: 0 auto;
`;
