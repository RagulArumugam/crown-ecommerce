import React, { createContext, useState } from "react";

export const CartContext = createContext({
  openCart: [],
  setOpenCart: () => {},
  cartItems: [],
});

export const CartProvider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const handleAddCartItem = (selectedProduct) => {
    const productExist = [...cartItems].find(
      (item) => item.id === selectedProduct.id
    );
    if (productExist) {
      let finalProducts = [...cartItems].map((item) =>
        item.id === selectedProduct.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return setCartItems(finalProducts);
    }
    let finalProducts = [...cartItems, { ...selectedProduct, quantity: 1 }];
    return setCartItems(finalProducts);
  };

  const value = {
    openCart,
    setOpenCart,
    handleAddCartItem,
    cartItems,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
