import { combineReducers } from 'redux';
import countersReducer from './countersReducer';

const rootReducer = combineReducers({
  counters: countersReducer,
});

export default rootReducer;
