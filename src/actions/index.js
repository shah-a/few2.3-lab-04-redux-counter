const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = (val) => ({
  type: INCREMENT,
  payload: val,
});

const decrement = (val) => ({
  type: DECREMENT,
  payload: val,
});

export {
  INCREMENT, increment,
  DECREMENT, decrement,
};
