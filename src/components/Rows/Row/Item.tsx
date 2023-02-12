import { memo } from 'react';

import { Props } from '../Row';
import { ItemStyled } from '../styles';

export const Item = memo(({ id }: Props) => <ItemStyled>{id}</ItemStyled>);
