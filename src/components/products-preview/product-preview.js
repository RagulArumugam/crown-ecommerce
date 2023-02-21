import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCategoryLoading } from "../../store/category-reducer/category-selector";
import ProductCard from "../product-card/product-card";
import Spinner from "../spinner/spinner";
import "./product-preview.scss";

const ProductPreview = ({ title, products }) => {
  const isCategoryLoading = useSelector(selectCategoryLoading);

  return (
    <div className="category-preview-container">
      {isCategoryLoading ? (
        <Spinner />
      ) : (
        <>
          <h2>
            <Link to={`${title}`}>
              <span className="title">{title.toUpperCase()}</span>
            </Link>
          </h2>
          <div className="preview">
            {products
              .filter((_, id) => id < 4)
              .map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPreview;
