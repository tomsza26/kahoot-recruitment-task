import { Button } from './Button';
import { Counter } from './Counter';
import { CounterWrapper, GameStatusStyled } from './styles';

export const GameStatus = () => (
  <GameStatusStyled>
    <CounterWrapper>
      <header>Total</header>
      <Counter />
    </CounterWrapper>
    <Button />
  </GameStatusStyled>
);
