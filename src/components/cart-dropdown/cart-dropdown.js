import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.scss";
import { useSelector } from "react-redux";
import { selectCartItem } from "../../store/cart-reducer/cart-selector";

const CartDropdown = () => {
  //context
  // const { cartItems } = useContext(CartContext);
  const cartItems = useSelector(selectCartItem);

  const navigate = useNavigate();

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((product) => (
            <CartItem key={product.id} product={product} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={() => navigate("/checkout")}>Go TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
