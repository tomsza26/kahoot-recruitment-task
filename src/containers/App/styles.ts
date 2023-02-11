import { styled } from 'goober';

import { BORDER } from 'global-styles';

export const StyledApp = styled('div')`
  display: grid;
  grid-template-columns: 5fr 2fr;
  grid-template-rows: 3.5rem 1fr;
  border: ${BORDER};
  height: 100vh;
  width: 100vw;
`;
