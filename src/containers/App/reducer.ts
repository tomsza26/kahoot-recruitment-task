import { ADD_ITEM, RESET_GAME, scoring } from './constants';
import { AppAction, AppState } from './types';
import { calculateBonus } from './utils';

export const initialState: AppState = {
  total: 0,
  bonus: 0,
  items: {
    A: { amount: 0, points: 0, bonus: 0 },
    B: { amount: 0, points: 0, bonus: 0 },
    C: { amount: 0, points: 0, bonus: 0 },
    D: { amount: 0, points: 0, bonus: 0 },
    E: { amount: 0, points: 0, bonus: 0 },
    F: { amount: 0, points: 0, bonus: 0 },
  },
};

export const appReducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case ADD_ITEM: {
      const amount = state.items[action.id].amount + 1;
      const bonus = calculateBonus(action.id, amount);

      return {
        ...state,
        total: state.total + scoring[action.id].points + bonus,
        bonus: state.bonus + bonus,
        items: {
          ...state.items,
          [action.id]: {
            ...state.items[action.id],
            amount,
            points: scoring[action.id].points * amount,
            bonus: state.items[action.id].bonus + bonus,
          },
        },
      };
    }

    case RESET_GAME:
      return initialState;

    default:
      return state;
  }
};
