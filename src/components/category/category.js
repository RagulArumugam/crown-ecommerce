import Title from "antd/lib/skeleton/Title";
import React, { useContext } from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/products.context";
import ProductCard from "../product-card/product-card";
import "./category.scss";

const Category = () => {
  const { categioriesMap } = useContext(ProductContext);
  const { category } = useParams();
  return (
    <>
      <h2 className="cat-title">{category.toUpperCase()}</h2>
      <div className="single-category-container">
        {categioriesMap[category]?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default Category;
