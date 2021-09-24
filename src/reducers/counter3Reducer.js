import { INCREMENT_3, DECREMENT_3, RESET } from '../actions';

const counter3Reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_3:
      return state + action.payload;
    case DECREMENT_3:
      return state - action.payload;
    case RESET:
      return 0;
    default:
      return state;
  }
};

export default counter3Reducer;
