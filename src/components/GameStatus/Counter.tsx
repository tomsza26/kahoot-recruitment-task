import { useSelector } from 'react-redux';

import { getTotal } from 'containers/App/selectors';

export const Counter = () => {
  const total = useSelector(getTotal);

  return <div>{total}</div>;
};
