import { StatActionTypes } from './stats.types';

export const getStatsByCountry = (country) => ({
  type: StatActionTypes.GET_STATS_BY_COUNTRY,
  payload: country,
});

export const getAllStats = () => ({
  type: StatActionTypes.GET_ALL_STATS,
});
