import { INCREMENT, DECREMENT, RESET } from '../actions';

const clicksReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
    case DECREMENT:
      return state + 1;
    case RESET:
      return 0;
    default:
      return state;
  }
};

export default clicksReducer;
