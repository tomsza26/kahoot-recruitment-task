import { useCallback } from 'react';

import { resetGame } from 'containers/App/actions';

import { ButtonStyled } from './styles';

export const Button = () => {
  const onClick = useCallback(() => resetGame(), []);

  return <ButtonStyled onClick={onClick}>NEW GAME</ButtonStyled>;
};
