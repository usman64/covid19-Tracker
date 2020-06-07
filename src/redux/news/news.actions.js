import { NewsActionTypes } from './news.types';

export const getNews = () => {
  return async (dispatch, getState) => {
    dispatch({ type: NewsActionTypes.GET_NEWS_DATA });
    try {
      const resp = await fetch(
        'https://api.smartable.ai/coronavirus/news/global',
        {
          headers: {
            'Subscription-Key': '0ce8a0c4bc8849028b6824aa3193b952',
          },
        }
      );
      const respJSON = await resp.json();
      dispatch({
        type: NewsActionTypes.GET_NEWS_DATA_SUCCESS,
        payload: respJSON.news,
      });
    } catch (err) {
      dispatch({ type: NewsActionTypes.GET_NEWS_DATA_FAILED, payload: err });
    }
  };
};
