import { INC, DEC, RES } from '../actions';

const counters = [
  { id: 1, count: 0, step: 1 },
  { id: 2, count: 0, step: 5 },
  { id: 3, count: 0, step: 10 },
];

const countersReducer = (state = counters, action) => {
  const newState = [...state];

  switch (action.type) {
    case INC:
      return newState.map((counter, index) => {
        if (action.payload.index === index) {
          return { ...counter, count: counter.count + action.payload.step };
        }
        return { ...counter };
      });
    case DEC:
      return newState.map((counter, index) => {
        if (action.payload.index === index) {
          return { ...counter, count: counter.count - action.payload.step };
        }
        return { ...counter };
      });
    case RES:
      return newState.map((counter) => ({ ...counter, count: 0 }));
    default:
      return state;
  }
};

export default countersReducer;
