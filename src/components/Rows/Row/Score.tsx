import { useSelector } from 'react-redux';

import { getItemPointsById } from 'containers/App/selectors';

import { QuantityStyled } from '../styles';

type Props = {
  id: string;
};

export const Score = ({ id }: Props) => {
  const points = useSelector((state) => getItemPointsById(state, id));

  return <QuantityStyled>{points}</QuantityStyled>;
};
