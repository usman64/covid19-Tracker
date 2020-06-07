import { NewsActionTypes } from './news.types';

const INITIAL_STATE = {
  news_data: [],
  isLoading: false,
  error: null,
};

export const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewsActionTypes.GET_NEWS_DATA:
      return { ...state, isLoading: true };
    case NewsActionTypes.GET_NEWS_DATA_SUCCESS:
      return { ...state, isLoading: false, news_data: action.payload };
    case NewsActionTypes.GET_NEWS_DATA_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
