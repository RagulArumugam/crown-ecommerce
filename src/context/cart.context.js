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

  const increaseProductCount = (selectedProduct) => {
    let finalProducts = [...cartItems].map((item) =>
      item.id === selectedProduct.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCartItems(finalProducts);
  };

  const decreaseProductCount = (selectedProduct) => {
    if (selectedProduct.quantity > 1) {
      let finalProducts = [...cartItems].map((item) =>
        item.id === selectedProduct.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setCartItems(finalProducts);
    } else {
      removedProduct(selectedProduct);
    }
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  const removedProduct = (selectedProduct) => {
    let finalProducts = [...cartItems].filter(
      (item) => item.id !== selectedProduct.id
    );
    setCartItems(finalProducts);
  };

  const value = {
    openCart,
    setOpenCart,
    handleAddCartItem,
    cartItems,
    decreaseProductCount,
    increaseProductCount,
    removedProduct,
    calculateTotalAmount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
