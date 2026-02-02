import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.map(p => 
          p.id === product.id 
            ? { ...p, quantity: p.quantity + 1 } 
            : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => {
      return prev
        .map(p => {
          if (p.id === id) {
            // si hay más de una unidad, restamos 1
            if (p.quantity > 1) {
              return { ...p, quantity: p.quantity - 1 };
            }
            // si solo queda 1, lo eliminamos
            return null;
          }
          return p;
        })
        .filter(Boolean); // eliminamos los null
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
