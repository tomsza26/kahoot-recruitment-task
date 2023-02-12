import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { resetGame } from 'containers/App/actions';

import { ButtonStyled } from './styles';

export const Button = () => {
  const dispatch = useDispatch();

  const onClick = useCallback(() => dispatch(resetGame()), []);

  return <ButtonStyled onClick={onClick}>NEW GAME</ButtonStyled>;
};
