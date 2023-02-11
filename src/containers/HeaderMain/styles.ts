import { styled } from 'goober';

import { BORDER } from 'global-styles';

export const StyledHeaderMain = styled('div')`
  display: flex;
  align-items: center;
  padding: 0.35rem;
  border-bottom: ${BORDER};
`;

export const Logo = styled('img')`
  max-width: 8rem;
  margin-right: 1rem;
`;

export const Header = styled('span')`
  font-size: 2.5rem;
  font-weight: 600;
`;
