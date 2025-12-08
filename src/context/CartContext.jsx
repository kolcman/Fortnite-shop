import { Children, createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [order, setOrder] = useState([]);

  const addItemToCart = (item) => {
    setOrder((prev) => [...prev, item]);
  };

  return (
    <CartContext.Provider value={{ order, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
}
