import actionsTypes from './counter-types';

const increment = value => ({
  type: actionsTypes.INCREMENT,
  payload: value,
});

const decrement = value => ({
  type: actionsTypes.DECREMENT,
  payload: value,
});

export default { increment, decrement };
