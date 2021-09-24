const INCREMENT = 'INCREMENT';
const INCREMENT_2 = 'INCREMENT_2';
const INCREMENT_3 = 'INCREMENT_3';

const DECREMENT = 'DECREMENT';
const DECREMENT_2 = 'DECREMENT_2';
const DECREMENT_3 = 'DECREMENT_3';

const RESET = 'RESET';

const increment = (val) => ({
  type: INCREMENT,
  payload: val,
});

const increment2 = (val) => ({
  type: INCREMENT_2,
  payload: val,
});

const increment3 = (val) => ({
  type: INCREMENT_3,
  payload: val,
});

const decrement = (val) => ({
  type: DECREMENT,
  payload: val,
});

const decrement2 = (val) => ({
  type: DECREMENT_2,
  payload: val,
});

const decrement3 = (val) => ({
  type: DECREMENT_3,
  payload: val,
});

const reset = () => ({
  type: RESET,
});

export {
  INCREMENT, INCREMENT_2, INCREMENT_3,
  DECREMENT, DECREMENT_2, DECREMENT_3,
  RESET,

  increment, increment2, increment3,
  decrement, decrement2, decrement3,
  reset,
};
