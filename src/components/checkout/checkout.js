import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { CartContext } from "../../context/cart.context";
import {
  selectCartItem,
  selectTotalCartAMount,
} from "../../store/cart-reducer/cart-selector";
import CheckoutItem from "../checkout-item/checkout-item";
import "./checkout.scss";

const CheckoutComponent = () => {
  //context
  // const { cartItems, calculateTotalAmount } = useContext(CartContext);
  const totalCartAmount = useSelector(selectTotalCartAMount);
  const cartItems = useSelector(selectCartItem);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-blocks">
          <span>Product</span>
        </div>
        <div className="header-blocks">
          <span>Description</span>
        </div>
        <div className="header-blocks">
          <span>Quantity</span>
        </div>
        <div className="header-blocks">
          <span>Price</span>
        </div>
        <div className="header-blocks">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        const { id } = cartItem;
        return <CheckoutItem cartItem={cartItem} key={id} />;
      })}
      <span className="total">Total : {totalCartAmount}</span>
    </div>
  );
};

export default CheckoutComponent;
