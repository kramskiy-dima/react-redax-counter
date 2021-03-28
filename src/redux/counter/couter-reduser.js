import { combineReducers } from 'redux';
import actionTypes from './counter-types';

const valueReducer = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return state + action.payload;

    case actionTypes.DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};

const stepReducer = (state = 100, action) => state;

export default combineReducers({
  value: valueReducer,
  step: stepReducer,
});
