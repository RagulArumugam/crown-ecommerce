import React, { Fragment, useContext } from "react";
import ProductPreview from "../../components/products-preview/product-preview";
import { ProductContext } from "../../context/products.context";
import "./categories-preview.scss";

const CategoryPreview = () => {
  //context
  const { categioriesMap } = useContext(ProductContext);
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
