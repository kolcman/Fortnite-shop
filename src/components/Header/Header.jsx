import Cart from "../Cart/Cart";
import { useCart } from "../../context/CartContext";
import styles from "./Header.module.css";
import CartList from "../CartList/CartList";

export default function Header() {
  const { order, isOpen } = useCart();

  return (
    <div className={`${styles.header}`}>
      <a href="#">
        <img
          className={`${styles.header__logo}`}
          src="/src/assets/Epic_Games_logo.svg"
          alt="Логотип Epic Games"
        />
      </a>
      {isOpen ? <CartList /> : null}
      <Cart quantity={order.length} />
    </div>
  );
}
