// 'increment', 'decrement', and 'reset' actions
const [INC, DEC, RES] = ['INC', 'DEC', 'RES'];

const inc = (i, step) => ({
  type: INC,
  payload: { i, step },
});

const dec = (i, step) => ({
  type: DEC,
  payload: { i, step },
});

const res = () => ({
  type: RES,
});

export {
  INC, DEC, RES,
  inc, dec, res,
};
