import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_ITEM,
} from "../constant";

export const setAddCart = (data) => (dispatch) => {
  console.log(data);

  dispatch({
    type: ADD_TO_CART,
    payload: { ...data, id: new Date().getTime() },
  });
};
export const setRemoveItem = (id) => (dispatch) => {
  console.log(id);

  dispatch({
    type: REMOVE_ITEM,
    payload: id,
  });
};

export const setIncreaseQuantity =
  ({ itemID, size }) =>
  (dispatch) => {
    dispatch({
      type: INCREASE_QUANTITY,
      payload: { itemID, size },
    });
  };

export const setDecreaseQuantity =
  ({ itemID, size }) =>
  (dispatch) => {
    dispatch({
      type: DECREASE_QUANTITY,
      payload: { itemID, size },
    });
  };
