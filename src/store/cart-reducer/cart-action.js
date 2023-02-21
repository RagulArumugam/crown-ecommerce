import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart-types";

export const handleAddCartItem = (cartItems, selectedProduct) => {
  const productExist = [...cartItems].find(
    (item) => item.id === selectedProduct.id
  );
  if (productExist) {
    let finalProducts = [...cartItems].map((item) =>
      item.id === selectedProduct.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    return createAction(CART_ACTION_TYPES.ADD_CART_ITEM, finalProducts);
  }
  let finalProducts = [...cartItems, { ...selectedProduct, quantity: 1 }];
  return createAction(CART_ACTION_TYPES.ADD_CART_ITEM, finalProducts);
};

export const increaseProductCount = (cartItems, selectedProduct) => {
  let finalProducts = [...cartItems].map((item) =>
    item.id === selectedProduct.id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );
  return createAction(CART_ACTION_TYPES.INCREMENT_PRODUCT_COUNT, finalProducts);
};

export const removedProduct = (cartItems, selectedProduct) => {
  let finalProducts = [...cartItems].filter(
    (item) => item.id !== selectedProduct.id
  );
  return createAction(
    CART_ACTION_TYPES.REMOVE_PRODUCT_FROM_CART,
    finalProducts
  );
};

export const decreaseProductCount = (cartItems, selectedProduct) => {
  // if (selectedProduct.quantity > 1) {
  let finalProducts = [...cartItems].map((item) =>
    item.id === selectedProduct.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
  return createAction(CART_ACTION_TYPES.DECREMENT_PRODUCT_COUNT, finalProducts);
};

export const toggleCart = () => {
  return createAction(CART_ACTION_TYPES.TOGGLE_CART);
};
