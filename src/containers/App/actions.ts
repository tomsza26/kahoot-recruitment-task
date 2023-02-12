import { ADD_ITEM, RESET_GAME } from './constants';
import { Id } from './types';

export const resetGame = () => ({
  type: RESET_GAME,
});

export const addItem = (id: Id) => ({
  type: ADD_ITEM,
  id,
});
