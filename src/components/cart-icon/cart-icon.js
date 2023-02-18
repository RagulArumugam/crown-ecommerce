import React, { useContext } from "react";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import "./cart-icon.scss";

const CartIcon = () => {
  //context
  const { openCart, setOpenCart } = useContext(CartContext);

  return (
    <div
      className="cart-icon-container"
      onClick={() => {
        setOpenCart(!openCart);
      }}
    >
      <ShoppingCart className="shopping-icon"></ShoppingCart>
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
