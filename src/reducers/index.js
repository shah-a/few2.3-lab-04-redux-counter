import { combineReducers } from 'redux';
import countersReducer from './countersReducer';
import clicksReducer from './clicksReducer';

const rootReducer = combineReducers({
  counters: countersReducer,
  clicks: clicksReducer,
});

export default rootReducer;
