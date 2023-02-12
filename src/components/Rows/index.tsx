import { useSelector } from 'react-redux';

import { getItemsIds } from 'containers/App/selectors';

import { Row } from './Row';
import { RowsStyled } from './styles';

export const Rows = () => {
  const ids = useSelector(getItemsIds);

  return (
    <RowsStyled>
      {ids.map((id) => (
        <Row id={id} key={id} />
      ))}
    </RowsStyled>
  );
};
