import { StatActionTypes } from './stats.types';

export const getStatsByCountry = (countryCode) => {
  return async (dispatch, getState) => {
    dispatch({ type: StatActionTypes.GET_STATS_BY_COUNTRY });
    dispatch(setCurrentCountry(countryCode));
    try {
      const resp = await fetch(
        `https://api.smartable.ai/coronavirus/stats/${countryCode}`,
        {
          headers: {
            'Subscription-Key': '0ce8a0c4bc8849028b6824aa3193b952',
          },
        }
      );
      const respJSON = await resp.json();
      dispatch({
        type: StatActionTypes.GET_STATS_BY_COUNTRY_SUCCESS,
        payload: respJSON.stats,
      });
    } catch (err) {
      dispatch({
        type: StatActionTypes.GET_STATS_BY_COUNTRY_FAILED,
        payload: err,
      });
    }
  };
};

export const setCurrentCountry = (countryCode) => ({
  type: StatActionTypes.SET_CURRENT_COUNTRY,
  payload: countryCode,
});

export const getAllStats = () => ({
  type: StatActionTypes.GET_ALL_STATS,
});
