import React, { createContext, useState } from "react";

export const CartContext = createContext({
  openCart: [],
  setOpenCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [openCart, setOpenCart] = useState(false);
  const value = {
    openCart,
    setOpenCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
