import { StatActionTypes } from './stats.types';

const INITIAL_STATE = {
  allStats: false,
  currentCountry: { code: 'US', label: 'United States' },
  currentCountryStats: false,
  isLoadingByCountry: false,
  isLoadingAllStats: false,
  errorAllStats: null,
  errorByCountry: null,
};

export const statsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StatActionTypes.SET_CURRENT_COUNTRY:
      return { ...state, currentCountry: action.payload };
    case StatActionTypes.RESET_ALERT_NO_DATA_AVAILABLE:
      return { ...state, errorByCountry: null };
    case StatActionTypes.GET_STATS_BY_COUNTRY:
      return { ...state, isLoadingByCountry: true };
    case StatActionTypes.GET_STATS_BY_COUNTRY_SUCCESS:
      return {
        ...state,
        isLoadingByCountry: false,
        currentCountryStats: action.payload,
      };
    case StatActionTypes.GET_STATS_BY_COUNTRY_FAILED:
      return {
        ...state,
        isLoadingByCountry: false,
        errorByCountry: action.payload,
      };
    case StatActionTypes.GET_ALL_STATS:
      return { ...state, isLoadingAllStats: true };
    case StatActionTypes.GET_ALL_STATS_SUCCESS:
      return {
        ...state,
        isLoadingAllStats: false,
        allStats: action.payload,
      };
    case StatActionTypes.GET_ALL_STATS_FAILED:
      return {
        ...state,
        isLoadingAllStats: false,
        errorAllStats: action.payload,
      };
    default:
      return state;
  }
};
