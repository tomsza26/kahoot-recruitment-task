import { useSelector } from 'react-redux';

import { getItems } from 'containers/App/selectors';

import { Row } from './Row';
import { RowsStyled } from './styles';

export const Rows = () => {
  const items = useSelector(getItems);

  // TODO key
  return (
    <RowsStyled>
      {items.map((item) => (
        <Row id={item.label} key={item.label} />
      ))}
    </RowsStyled>
  );
};
