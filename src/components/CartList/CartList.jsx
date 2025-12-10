import { useCart } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import styles from "./CartList.module.css";

export default function CartList() {
  const { order, totalPrice, clearCart } = useCart();

  return (
    <div className={`${styles.cartList}`}>
      <div className={`${styles.cartList__list}`}>
        {order.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className={`${styles.cartList__bottom}`}>
          <div className={`${styles.cartList__total}`}>
            Итого:
            <span className={`${styles.cartList__value}`}>{totalPrice}</span>
            coins
          </div>
          <button
            className={`${styles.cartList__btn}`}
            onClick={() => clearCart()}
          >
            Очистить
          </button>
        </div>
      </div>
    </div>
  );
}
