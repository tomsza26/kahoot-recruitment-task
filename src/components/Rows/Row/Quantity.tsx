import { memo } from 'react';
import { useSelector } from 'react-redux';

import { getItemAmountById } from 'containers/App/selectors';

import { Props } from '../Row';
import { QuantityStyled } from '../styles';

export const Quantity = memo(({ id }: Props) => {
  const points = useSelector((state) => getItemAmountById(state, id));

  return <QuantityStyled>{points}</QuantityStyled>;
});
