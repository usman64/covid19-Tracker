import { combineReducers } from 'redux';
import { statsReducer } from './stats/stats.reducer';
import { newsReducer } from './news/news.reducer';

const rootReducer = combineReducers({
  news: newsReducer,
  stats: statsReducer,
});

export default rootReducer;
