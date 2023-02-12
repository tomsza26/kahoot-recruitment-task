import { styled } from 'goober';

import { BORDER, RED } from 'global-styles';

export const ContentMainStyled = styled('div')`
  overflow-y: auto;
  padding: 0.35rem;
`;

export const Header = styled('header')`
  font-size: 1.2rem;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`;

export const ItemsWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.5rem;
`;

export const ItemStyled = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${RED};
  width: 6rem;
  height: 6rem;
  border: ${BORDER};
  font-weight: 700;
  font-size: 4rem;
  user-select: none;
  cursor: pointer;
`;
