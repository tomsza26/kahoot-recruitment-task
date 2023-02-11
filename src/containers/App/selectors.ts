import { REDUCER_APP_KEY, Store } from 'reduxConfig/constants';

import { initialState } from './reducer';
import { AppState } from './types';

export const getComponentState = (state: Store): AppState => state[REDUCER_APP_KEY] || initialState;
