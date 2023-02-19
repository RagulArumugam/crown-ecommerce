import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  const { decreaseProductCount, increaseProductCount, removedProduct } =
    useContext(CartContext);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            decreaseProductCount(cartItem);
          }}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            increaseProductCount(cartItem);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price * quantity}</span>
      <div className="remove-button" onClick={() => removedProduct(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
