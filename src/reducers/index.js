import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import clicksReducer from './clicksReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  clicks: clicksReducer,
});

export default rootReducer;
