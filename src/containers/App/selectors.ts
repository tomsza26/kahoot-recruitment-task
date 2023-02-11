import { createSelector } from 'reselect';

import { REDUCER_APP_KEY, Store } from 'reduxConfig/constants';

import { initialState } from './reducer';
import { AppState } from './types';

const getComponentState = (state: Store): AppState => state[REDUCER_APP_KEY] || initialState;

export const getBonus = createSelector(getComponentState, ({ bonus }) => bonus);

export const getTotal = createSelector(getComponentState, ({ total }) => total);

export const getItems = createSelector(getComponentState, ({ items }) => items);

export const getItemById = createSelector([getItems, (_, id) => id], (items, id) =>
  items.find((item) => item.label === id),
);

export const getItemPointsById = createSelector(getItemById, (item) => item?.points || 0);

// export const getItems = createSelector([getComponentState], ({ items }) => items);
