import {
  INCREMENT, INCREMENT_2, INCREMENT_3,
  DECREMENT, DECREMENT_2, DECREMENT_3,
  RESET,
} from '../actions';

const clicksReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT: case INCREMENT_2: case INCREMENT_3:
    case DECREMENT: case DECREMENT_2: case DECREMENT_3:
      return state + 1;
    case RESET:
      return 0;
    default:
      return state;
  }
};

export default clicksReducer;
