import React, { createContext, useState } from "react";
import productsData from "../shop-data.json";

export const ProductContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const value = {
    products,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
