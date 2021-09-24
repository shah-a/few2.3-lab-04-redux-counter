import { INCREMENT_2, DECREMENT_2, RESET } from '../actions';

const counter2Reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_2:
      return state + action.payload;
    case DECREMENT_2:
      return state - action.payload;
    case RESET:
      return 0;
    default:
      return state;
  }
};

export default counter2Reducer;
