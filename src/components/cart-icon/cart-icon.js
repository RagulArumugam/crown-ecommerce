import React, { useContext } from "react";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import "./cart-icon.scss";

const CartIcon = () => {
  //context
  const { openCart, setOpenCart, cartItems } = useContext(CartContext);
  const totalCount = (products) => {
    return products.reduce((acc, item) => acc + item.quantity, 0);
  };
  return (
    <div
      className="cart-icon-container"
      onClick={() => {
        setOpenCart(!openCart);
      }}
    >
      <ShoppingCart className="shopping-icon"></ShoppingCart>
      <span className="item-count">{totalCount(cartItems)}</span>
    </div>
  );
};

export default CartIcon;
