import { CART_ACTION_TYPES } from "./cart-types";
const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
  cartTotalAmount: 0,
};

const calculateTotal = (payload) =>
  payload.reduce((acc, item) => acc + item.quantity * item.price, 0);

export const cartItemsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  // cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  switch (type) {
    case CART_ACTION_TYPES.ADD_CART_ITEM:
      return {
        ...state,
        cartItems: payload,
        cartTotalAmount: calculateTotal(payload),
      };
    case CART_ACTION_TYPES.INCREMENT_PRODUCT_COUNT:
      return {
        ...state,
        cartItems: payload,
        cartTotalAmount: calculateTotal(payload),
      };
    case CART_ACTION_TYPES.DECREMENT_PRODUCT_COUNT:
      return {
        ...state,
        cartItems: payload,
        cartTotalAmount: calculateTotal(payload),
      };
    case CART_ACTION_TYPES.GET_TOTAL_AMOUNT:
      return {
        ...state,
        cartTotalAmount: calculateTotal(payload),
      };
    case CART_ACTION_TYPES.TOGGLE_CART:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case CART_ACTION_TYPES.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cartItems: payload,
        cartTotalAmount: calculateTotal(payload),
      };
    default:
      return state;
  }
};
