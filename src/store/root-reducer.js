import { combineReducers } from "redux";
import { cartItemsReducer } from "./cart-reducer/cart-reducer";
import { categoryReducer } from "./category-reducer/category-reducer";
import { userReducer } from "./user-reducer/user-reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoryReducer,
  cartItems: cartItemsReducer,
});
