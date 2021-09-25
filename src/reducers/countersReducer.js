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
      newState[action.payload.index].count += action.payload.step;
      return newState;
    case DEC:
      newState[action.payload.index].count -= action.payload.step;
      return newState;
    case RES:
      // return newState.map((counter) => ({ count: 0, step: counter.step }));
      return counters;
    default:
      return state;
  }
};

export default countersReducer;
