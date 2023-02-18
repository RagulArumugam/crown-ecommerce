import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.scss";

const CartDropdown = () => {
  //context
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      <Button>Go TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
