import { scoring } from './constants';
import { Id } from './types';

export const calculateBonus = (id: Id, amount: number) => {
  if (scoring[id].bonus) {
    const { prize, qty } = scoring[id].bonus!;

    const isNewBonus = !(amount % qty);
    return isNewBonus ? prize : 0;
  }

  return 0;
};
