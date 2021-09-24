import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import counter2Reducer from './counter2Reducer';
import counter3Reducer from './counter3Reducer';
import clicksReducer from './clicksReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  counter2: counter2Reducer,
  counter3: counter3Reducer,
  clicks: clicksReducer,
});

export default rootReducer;
