import React, { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import ProductPreview from "../../components/products-preview/product-preview";
import { ProductContext } from "../../context/products.context";
import { selectCategory } from "../../store/category-reducer/category-selector";
import "./categories-preview.scss";

const CategoryPreview = () => {
  //context
  // const { categioriesMap } = useContext(ProductContext);
  const categioriesMap = useSelector(selectCategory);
  return (
    <Fragment>
      {Object.keys(categioriesMap).map((title, index) => (
        <ProductPreview
          key={index}
          title={title}
          products={categioriesMap[title]}
        />
      ))}
    </Fragment>
  );
};

export default CategoryPreview;
