import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Props } from 'components/Rows/Row';
import { addItem } from 'containers/App/actions';

import { ItemStyled } from './styles';

export const Item = ({ id }: Props) => {
  const dispatch = useDispatch();

  const onClick = useCallback(() => dispatch(addItem(id)), [id]);

  return <ItemStyled onClick={onClick}>{id}</ItemStyled>;
};
