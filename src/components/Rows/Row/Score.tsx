import { memo } from 'react';
import { useSelector } from 'react-redux';

import { getItemScoreById } from 'containers/App/selectors';

import { Props } from '../Row';
import { QuantityStyled } from '../styles';

export const Score = memo(({ id }: Props) => {
  const points = useSelector((state) => getItemScoreById(state, id));

  return <QuantityStyled>{points}</QuantityStyled>;
});
