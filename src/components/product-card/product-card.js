import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartContext } from "../../context/cart.context";
import { handleAddCartItem } from "../../store/cart-reducer/cart-action";
import { selectCartItem } from "../../store/cart-reducer/cart-selector";
import Button from "../button/button";
import "./product-card.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  //context
  // const { handleAddCartItem } = useContext(CartContext);

  const disptach = useDispatch();

  const cartItems = useSelector(selectCartItem);

  const handleAddCartItemHandler = (product) =>
    disptach(handleAddCartItem(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`product-${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        onClick={() => handleAddCartItemHandler(product)}
        buttonType={"inverted"}
      >
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
