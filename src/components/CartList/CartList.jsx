import { useCart } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import styles from "./CartList.module.css";

export default function CartList() {
  const { order, totalPrice } = useCart();

  return (
    <div className={`${styles.cartList}`}>
      <div className={`${styles.cartList__list}`}>
        {order.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className={`${styles.cartList__total}`}>
          Итого: {totalPrice} coins
        </div>
      </div>
    </div>
  );
}
