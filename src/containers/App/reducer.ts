import { AppAction, AppState } from './types';

export const initialState: AppState = {};

export const appReducer = (state = initialState, action: AppAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
