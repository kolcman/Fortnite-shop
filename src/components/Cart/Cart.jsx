import { useCart } from "../../context/CartContext";
import styles from "./Cart.module.css";

export default function Cart(props) {
  const { quantity = 0 } = props;
  const { handleCartOpen } = useCart();

  function getCartLabel(count) {
    if (count === 0) {
      return "Корзина пуста";
    }

    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      return `${count} товаров`;
    }

    if (lastDigit === 1) {
      return `${count} товар`;
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
      return `${count} товара`;
    }

    return `${count} товаров`;
  }

  return (
    <div className={`${styles.cart}`} onClick={handleCartOpen}>
      <i className="material-icons">shopping_cart</i>
      {
        <span className={`${styles.cart__quantity}`}>
          {getCartLabel(quantity)}
        </span>
      }
    </div>
  );
}
