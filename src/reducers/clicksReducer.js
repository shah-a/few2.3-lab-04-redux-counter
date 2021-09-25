import { INC, DEC, RES } from '../actions';

const clicksReducer = (state = 0, action) => {
  switch (action.type) {
    case INC: case DEC:
      return state + 1;
    case RES:
      return 0;
    default:
      return state;
  }
};

export default clicksReducer;
