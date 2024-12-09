import PropTypes from "prop-types";
import { createContext, useCallback, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = useCallback((newItem, quantity) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((item) => item.sku === newItem.sku);

      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
        };
        return updatedItems;
      } else {
        return [...prevItems, { ...newItem, quantity: quantity || 1 }];
      }
    });
  }, []);

  const removeFromCart = useCallback((itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.sku !== itemId));
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, [setCartItems]);

  const updateQuantity = useCallback(
    (itemId, newQuantity) => {
      if (newQuantity <= 0) {
        return removeFromCart(itemId);
      }
      setCartItems((prevItems) =>
        prevItems.map((item) => (item.sku === itemId ? { ...item, quantity: newQuantity } : item))
      );
    },
    [removeFromCart]
  );

  const getTotalCartPrice = useCallback(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }, [cartItems]);

  const contextValue = useMemo(
    () => ({
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      getTotalCartPrice,
      clearCart,
    }),
    [cartItems, addToCart, removeFromCart, updateQuantity, getTotalCartPrice, clearCart]
  );
  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) throw new Error("useCart must be used within a CartProvider");

  return context;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
