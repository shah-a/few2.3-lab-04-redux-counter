const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const increment = (val) => ({
  type: INCREMENT,
  payload: val,
});

const decrement = (val) => ({
  type: DECREMENT,
  payload: val,
});

const reset = () => ({
  type: RESET,
});

export {
  INCREMENT, increment,
  DECREMENT, decrement,
  RESET, reset,
};
