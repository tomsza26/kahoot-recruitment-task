import { useSelector } from 'react-redux';

import { getBonus } from 'containers/App/selectors';

export const Counter = () => {
  const bonus = useSelector(getBonus);

  return <div>{bonus}</div>;
};
