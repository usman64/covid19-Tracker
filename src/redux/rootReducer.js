import { combineReducers } from 'redux';
import { statsReducer } from './stats/stats.reducer';

const rootReducer = statsReducer;
// combineReducers({stats: statsReducer });

export default rootReducer;
