import { StatActionTypes } from './stats.types';

const INITIAL_STATE = {
  all_stats: [],
};

export const statsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
