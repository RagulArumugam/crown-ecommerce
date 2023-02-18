import React from "react";
import Button from "../button/button";
import "./cart-dropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="card-items"></div>
      <Button>Go TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
