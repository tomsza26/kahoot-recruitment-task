import { createSelector } from 'reselect';

import { REDUCER_APP_KEY, Store } from 'reduxConfig/constants';

import { initialState } from './reducer';
import { AppState, Id } from './types';

const getComponentState = (state: Store): AppState => state[REDUCER_APP_KEY] || initialState;

export const getBonus = createSelector(getComponentState, ({ bonus }) => bonus);

export const getTotal = createSelector(getComponentState, ({ total }) => total);

export const getItems = createSelector(getComponentState, ({ items }) => items);

export const getItemsIds = createSelector(getItems, (items) => Object.keys(items) as Id[]);

export const getItemById = createSelector([getItems, (_, id: Id) => id], (items, id) => items[id]);

export const getItemScoreById = createSelector(getItemById, (item) => item.points + item.bonus);

export const getItemAmountById = createSelector(getItemById, (item) => item.amount);

export const getIsItemAmountById = createSelector(getItemAmountById, (amount) => !!amount);
