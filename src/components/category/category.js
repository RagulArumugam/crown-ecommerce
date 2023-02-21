import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectCategory,
  selectCategoryLoading,
} from "../../store/category-reducer/category-selector";
import ProductCard from "../product-card/product-card";
import Spinner from "../spinner/spinner";
import "./category.scss";

const Category = () => {
  // const { categioriesMap } = useContext(ProductContext);
  const categioriesMap = useSelector(selectCategory);
  const isCategoryLoading = useSelector(selectCategoryLoading);
  const { category } = useParams();
  return (
    <>
      <h2 className="cat-title">{category.toUpperCase()}</h2>
      {isCategoryLoading ? (
        <Spinner />
      ) : (
        <div className="single-category-container">
          {categioriesMap[category]?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};
export default Category;
