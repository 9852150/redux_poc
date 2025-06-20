import { DECREMENT, INCREMENT } from "../constant";

export const setIncrement = (count) => (dispatch) => {
  dispatch({
    type: INCREMENT,
    payload: count,
  });
};

// First Callback ((count) =>): This is the outer function that receives a parameter, count.
//  This function is a higher-order function that returns another function (the second callback).

// Second Callback ((dispatch) => {}): This is the inner function, which is the thunk itself.
//  It receives dispatch (and optionally getState) as arguments from Redux when it’s executed. The inner function is used to dispatch actions to Redux.

export const setDecrement = (count) => (dispatch) => {
  dispatch({
    type: DECREMENT,
    payload: count,
  });
};
