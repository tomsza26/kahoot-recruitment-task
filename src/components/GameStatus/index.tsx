import { Button } from './Button';
import { Counter } from './Counter';
import { CounterWrapper, GameStatusStyled, Header } from './styles';

export const GameStatus = () => (
  <GameStatusStyled>
    <CounterWrapper>
      <Header>Total</Header>
      <Counter />
    </CounterWrapper>
    <Button />
  </GameStatusStyled>
);
