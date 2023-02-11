import { styled } from 'goober';

import { BORDER } from 'global-styles';

export const StyledHeaderSideMenu = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem;
  border-left: ${BORDER};
  border-bottom: ${BORDER};
`;

export const Header = styled('span')`
  font-size: 1.5rem;
  font-weight: 600;
`;
