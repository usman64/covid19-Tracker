import { StatActionTypes } from './stats.types';

export const getStatsByCountry = (country) => {
  return async (dispatch, getState) => {
    dispatch({ type: StatActionTypes.GET_STATS_BY_COUNTRY });
    try {
      const resp = await fetch(
        `https://api.smartable.ai/coronavirus/stats/${country.code}`,
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
      dispatch(setCurrentCountry(country));
    } catch (err) {
      dispatch({
        type: StatActionTypes.GET_STATS_BY_COUNTRY_FAILED,
        payload: err,
      });
    }
  };
};

export const setCurrentCountry = (country) => ({
  type: StatActionTypes.SET_CURRENT_COUNTRY,
  payload: country,
});

export const getAllStats = () => {
  return async (dispatch, getState) => {
    dispatch({ type: StatActionTypes.GET_ALL_STATS });
    try {
      const resp = await fetch(
        `https://api.smartable.ai/coronavirus/stats/global`,
        {
          headers: {
            'Subscription-Key': '0ce8a0c4bc8849028b6824aa3193b952',
          },
        }
      );
      const respJSON = await resp.json();
      dispatch({
        type: StatActionTypes.GET_ALL_STATS_SUCCESS,
        payload: respJSON.stats,
      });
    } catch (err) {
      dispatch({
        type: StatActionTypes.GET_ALL_STATS_FAILED,
        payload: err,
      });
    }
  };
};

export const resetAlertNoDataAvailable = () => ({
  type: StatActionTypes.RESET_ALERT_NO_DATA_AVAILABLE,
});
