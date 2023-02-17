import React from "react";
import "./category-item.scss";

const CategoryItems = ({category}) => {
  return (
      <div key={category.id} className="category-container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${category.imageUrl})` }}
        />
        <div className="category-body-container">
          <h2>{category.title}</h2>
          <div>Shop Now</div>
        </div>
      </div>
  );
};
export default CategoryItems;