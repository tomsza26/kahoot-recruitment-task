import { RowStyled } from '../styles';
import { Item } from './Item';
import { Quantity } from './Quantity';
import { Score } from './Score';

type Props = {
  id: string;
};

export const Row = ({ id }: Props) => (
  <RowStyled>
    <Item id={id} />
    <Quantity id={id} />
    <Score id={id} />
  </RowStyled>
);
