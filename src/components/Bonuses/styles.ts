import { styled } from 'goober';

import { BORDER, BREAKPOINT_MD } from 'global-styles';

export const BonusesStyled = styled('div')`
  display: flex;
  border-top: ${BORDER};
  padding: 0.2rem 0.5rem;

  @media screen and (max-width: ${BREAKPOINT_MD}) {
    font-size: 1.3rem;
    padding: 0.2rem 0 0.2rem 0.5rem;
  }
`;

export const Header = styled('header')`
  padding-right: 1rem;
`;
