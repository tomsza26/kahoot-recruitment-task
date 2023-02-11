import { RESET_GAME } from './constants';

export interface AppState {
  bonus: number;
  total: number;
  items: Item[];
}

export type Item = {
  label: string;
  points: number;
};

export type AppAction = {
  type: typeof RESET_GAME;
};
