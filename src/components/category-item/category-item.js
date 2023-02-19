import React from "react";
import { Link } from "react-router-dom";
import "./category-item.scss";

const CategoryItems = ({ category }) => {
  return (
    <div key={category.id} className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      />
      <Link
        className="category-body-container"
        to={`shop/${category.title.toLowerCase()}`}
      >
        <h2>{category.title}</h2>
        <div>Shop Now</div>
      </Link>
    </div>
  );
};
export default CategoryItems;
