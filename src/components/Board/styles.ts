import { styled } from 'goober';

import { BORDER } from 'global-styles';

export const BoardStyled = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Headers = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  padding: 0.2rem 0.5rem;
  border-bottom: ${BORDER};

  span {
    display: flex;
    justify-content: center;
  }
`;
