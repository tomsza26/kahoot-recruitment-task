import { Board } from 'components/Board';
import { Bonuses } from 'components/Bonuses';
import { GameStatus } from 'components/GameStatus';

import { StyledSideMenu } from './styles';

export const ContentSideMenu = () => (
  <StyledSideMenu>
    <Board />
    <Bonuses />
    <GameStatus />
  </StyledSideMenu>
);
