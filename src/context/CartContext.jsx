import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [order, setOrder] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalSum = order.reduce((sum, item) => {
      const price = item.price?.finalPrice || item.price || 0;
      return sum + (typeof price === "number" ? price : 0);
    }, 0);
    setTotalPrice(totalSum);
  }, [order]);

  const addItemToCart = (item) => {
    setOrder((prev) => [...prev, item]);
    setOpen(true);
  };

  const handleCartOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <CartContext.Provider
      value={{ order, addItemToCart, handleCartOpen, totalPrice, isOpen }}
    >
      {children}
    </CartContext.Provider>
  );
}
