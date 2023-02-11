import { RESET_GAME } from './constants';
import { AppAction, AppState } from './types';

export const initialState: AppState = {
  bonus: 0,
  total: 0,
  items: [{ label: 'A', points: 50 }],
};

export const appReducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    case RESET_GAME:
      return initialState;

    default:
      return state;
  }
};
