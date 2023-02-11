import { ItemStyled } from '../styles';

type Props = {
  id: string;
};

export const Item = ({ id }: Props) => <ItemStyled>{id}</ItemStyled>;
