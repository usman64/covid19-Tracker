import { StatActionTypes } from './stats.types';

const INITIAL_STATE = {
  allStats: [],
  currentCountry: 'PK',
  currentCountryStats: [],
  isLoadingByCountry: false,
  error: null,
};

export const statsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StatActionTypes.SET_CURRENT_COUNTRY:
      return { ...state, currentCountry: action.payload };
    case StatActionTypes.GET_STATS_BY_COUNTRY:
      return { ...state, isLoadingByCountry: true };
    case StatActionTypes.GET_STATS_BY_COUNTRY_SUCCESS:
      return {
        ...state,
        isLoadingByCountry: false,
        currentCountryStats: action.payload,
      };
    case StatActionTypes.GET_STATS_BY_COUNTRY_FAILED:
      return { ...state, isLoadingByCountry: false, error: action.payload };
    default:
      return state;
  }
};
