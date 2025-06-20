import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_ITEM,
} from "../constant";

const shopping = (state = { cartData: [] }, action) => {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case ADD_TO_CART:
      // debugger;
      // return { ...state, cartData: [...state.cartData, payload] };
      const productExists = state.cartData?.find(
        (product) =>
          product.itemID === payload.itemID && product.size === payload.size
      );
      if (productExists) {
        // If the product exists, update its quantity
        const updatedCartData = state.cartData.map(
          (product) =>
            product.itemID === payload.itemID && product.size === payload.size
              ? { ...product, quantity: product.quantity + 1 } // Update quantity
              : product // Keep other products the same
        );

        return { ...state, cartData: updatedCartData };
      }

      // Add the product to the cartData (if it doesn't already exist)
      else return { ...state, cartData: [...state.cartData, payload] };

    case REMOVE_ITEM:
      return {
        ...state,
        cartData: state.cartData.filter((item) => item.id !== payload),
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cartData: state.cartData.map((product) =>
          product.itemID === payload.itemID && product.size === payload.size
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cartData: state.cartData.map((product) =>
          product.itemID === payload.itemID && product.size === payload.size
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };

    default:
      return state;
  }
};

export default shopping;
