import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseProductCount,
  increaseProductCount,
  removedProduct,
} from "../../store/cart-reducer/cart-action";
import { selectCartItem } from "../../store/cart-reducer/cart-selector";
import "./checkout-item.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  // const { decreaseProductCount, increaseProductCount, removedProduct } =
  //   useContext(CartContext);

  const disptach = useDispatch();

  const cartItems = useSelector(selectCartItem);

  const decreaseProductCountHandler = (cartItem) => {
    if (cartItem.quantity > 1) {
      disptach(decreaseProductCount(cartItems, cartItem));
    } else {
      disptach(removedProduct(cartItems, cartItem));
    }
  };

  const increaseProductCountHandler = (cartItem) =>
    disptach(increaseProductCount(cartItems, cartItem));

  const removedProductHandler = (cartItem) => {
    disptach(removedProduct(cartItems, cartItem));
  };

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
            decreaseProductCountHandler(cartItem);
          }}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            increaseProductCountHandler(cartItem);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price * quantity}</span>
      <div
        className="remove-button"
        onClick={() => removedProductHandler(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
