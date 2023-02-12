import { REDUCER_APP_KEY } from 'reduxConfig/constants';

import { Id, Scoring } from './types';

// REDUCER KEYS
export const RESET_GAME = `${REDUCER_APP_KEY}/RESET_GAME` as const;
export const ADD_ITEM = `${REDUCER_APP_KEY}/ADD_ITEM` as const;

export const ids: Id[] = ['A', 'B', 'C', 'D', 'E', 'F'];

export const scoring: Scoring = {
  A: { points: 50, bonus: { qty: 3, prize: 50 } },
  B: { points: 30, bonus: { qty: 2, prize: 30 } },
  C: { points: 20 },
  D: { points: 15 },
  E: { points: 10 },
  F: { points: 5 },
};
