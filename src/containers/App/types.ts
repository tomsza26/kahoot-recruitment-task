import { ADD_ITEM, RESET_GAME } from './constants';

export interface AppState {
  bonus: number;
  total: number;
  items: Record<Id, { amount: number; points: number; bonus: number }>;
}

export type Id = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

type ScoringObj = { points: number; bonus?: { qty: number; prize: number } };

export type Scoring = Record<Id, ScoringObj>;

export type AppAction =
  | {
      type: typeof RESET_GAME;
    }
  | { type: typeof ADD_ITEM; id: Id };
