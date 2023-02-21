import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import { toggleCart } from "../../store/cart-reducer/cart-action";
import { selectCartItem } from "../../store/cart-reducer/cart-selector";
import "./cart-icon.scss";

const CartIcon = () => {
  //context
  // const { openCart, setOpenCart, cartItems } = useContext(CartContext);

  const disptach = useDispatch();
  const cartItems = useSelector(selectCartItem);

  const totalCount = (products) => {
    return products.reduce((acc, item) => acc + item.quantity, 0);
  };

  const handleCartOpen = () => disptach(toggleCart());

  return (
    <div
      className="cart-icon-container"
      onClick={() => {
        handleCartOpen();
      }}
    >
      <ShoppingCart className="shopping-icon"></ShoppingCart>
      <span className="item-count">{totalCount(cartItems)}</span>
    </div>
  );
};

export default CartIcon;
