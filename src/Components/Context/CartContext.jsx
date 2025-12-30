import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
const WishlistContext = createContext();

export const useCart = () => useContext(CartContext);
export const useWishlist = () => useContext(WishlistContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, qty: (p.qty || 1) + 1 }
            : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, qty: (p.qty || 1) - 1 } : p
        )
        .filter((p) => p.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  // 🔥 NEW: clear cart after order
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.some((p) => p.id === product.id)
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product]
    );
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const AppProvider = ({ children }) => (
  <CartProvider>
    <WishlistProvider>{children}</WishlistProvider>
  </CartProvider>
);
