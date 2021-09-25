// 'increment', 'decrement', and 'reset' actions
const [INC, DEC, RES] = ['INC', 'DEC', 'RES'];

const inc = (index, step) => ({
  type: INC,
  payload: { index, step },
});

const dec = (index, step) => ({
  type: DEC,
  payload: { index, step },
});

const res = () => ({
  type: RES,
});

export {
  INC, DEC, RES,
  inc, dec, res,
};
