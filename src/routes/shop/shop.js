import React, { useContext } from "react";
import ProductCard from "../../components/product-card/product-card";
import { ProductContext } from "../../context/products.context";
import "./shop.scss";

const Shop = () => {
  //context
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
