import React from "react";
import Button from "../button/button";
import "./product-card.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  //context
  return (
    <div className="product-card-container">
      <img
        src={
          "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        }
        alt={`product-${name}`}
      />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={"inverted"}>Add to card</Button>
    </div>
  );
};

export default ProductCard;
