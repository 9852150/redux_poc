import { DECREMENT, INCREMENT } from "../constant";

const increDec = (state = { increment: 0 }, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, increment: state.increment + payload };
    case DECREMENT:
      return { ...state, increment: state.increment - payload };

    default:
      return state;
  }
};

export default increDec;



