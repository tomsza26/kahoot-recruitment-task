import { memo } from 'react';
import { useSelector } from 'react-redux';

import { getIsItemAmountById } from 'containers/App/selectors';
import { Id } from 'containers/App/types';

import { RowStyled } from '../styles';
import { Item } from './Item';
import { Quantity } from './Quantity';
import { Score } from './Score';

export type Props = {
  id: Id;
};

export const Row = memo(({ id }: Props) => {
  const isAmount = useSelector((state) => getIsItemAmountById(state, id));

  return isAmount ? (
    <RowStyled>
      <Item id={id} />
      <Quantity id={id} />
      <Score id={id} />
    </RowStyled>
  ) : null;
});
