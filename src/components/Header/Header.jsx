import Cart from "../Cart/Cart";
import { useCart } from "../../context/CartContext";
import styles from "./Header.module.css";

export default function Header() {
  const { order, addItemToCart } = useCart();

  return (
    <div className={`${styles.header}`}>
      <a href="#" className="brand-logo">
        Fortnite shop
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="collapsible.html">Repo</a>
        </li>
        <Cart quantity={order.length} />
      </ul>
    </div>
  );
}
