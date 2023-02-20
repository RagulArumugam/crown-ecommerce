import React, { createContext, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase";

export const ProductContext = createContext({
  products: {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState({});
  useState(() => {
    //   addCollectionAndDocuments("categories", SHOP_DATA);
    const getCategoryMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setProducts(categoryMap);
    };
    getCategoryMap();
  }, []);
  const value = {
    categioriesMap: products,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
