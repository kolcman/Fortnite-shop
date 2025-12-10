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
      return sum + (typeof price === "number" ? price : 0) * item.quantity;
    }, 0);
    setTotalPrice(totalSum);
  }, [order]);

  const isItemInCart = (id) => {
    return order.some((item) => item.mainId === id);
  };

  const addItemToCart = (item) => {
    if (isItemInCart(item.mainId)) {
      incQuantity(item.mainId);
    } else {
      setOrder((prev) => [...prev, { ...item, quantity: 1 }]);
      setOpen(true);
    }
  };

  const incQuantity = (id) => {
    const newOrder = order.map((el) => {
      if (el.mainId === id) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };
  const decQuantity = (id) => {
    const item = order.find((el) => el.mainId === id);
    if (item && item.quantity <= 1) {
      removeFromCart(id);
    } else {
      const newOrder = order.map((el) => {
        if (el.mainId === id) {
          return { ...el, quantity: el.quantity - 1 };
        }
        return el;
      });
      setOrder(newOrder);
    }
  };

  const removeFromCart = (id) => {
    const newOrder = order.filter((item) => item.mainId !== id);
    setOrder(newOrder);
  };

  const clearCart = () => {
    setOrder([]);
    setOpen(false);
  };

  const handleCartOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <CartContext.Provider
      value={{
        order,
        addItemToCart,
        removeFromCart,
        clearCart,
        incQuantity,
        decQuantity,
        handleCartOpen,
        totalPrice,
        isOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
