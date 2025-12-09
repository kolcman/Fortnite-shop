import Cart from "../Cart/Cart";
import { useCart } from "../../context/CartContext";
import styles from "./Header.module.css";
import CartList from "../CartList/CartList";

export default function Header() {
  const { order, isOpen } = useCart();

  return (
    <div className={`${styles.header}`}>
      <a href="#" className="brand-logo">
        Fortnite shop
      </a>
      {isOpen ? <CartList /> : null}
      <Cart quantity={order.length} />
    </div>
  );
}
