import { useCart } from "../../context/CartContext";
import styles from "./CartItem.module.css";

export default function CartItem(props) {
  const {
    mainId,
    displayName: name,
    price: { finalPrice: price } = {},
    displayAssets = [],
    quantity,
  } = props;

  const image = displayAssets[0]?.full_background || "";

  const { removeFromCart, incQuantity, decQuantity } = useCart();

  return (
    <div className={`${styles.cartItem}`} id={mainId}>
      <img
        className={`${styles.cartItem__img}`}
        src={image ? image : "/src/assets/img-placeholder.png"}
        alt={name}
      />
      <span>{name}</span>
      <div className={`${styles.cartItem__control}`}>
        <button
          className={`${styles.cartItem__btn}`}
          onClick={() => incQuantity(mainId)}
        >
          +
        </button>
        <span className={`${styles.cartItem__quantity}`}>{quantity}</span>
        <button
          className={`${styles.cartItem__btn}`}
          onClick={() => decQuantity(mainId)}
        >
          -
        </button>
      </div>
      <span className={`${styles.cartItem__price}`}>
        <span className={`${styles.cartItem__value}`}>{price} </span>
        coins
      </span>
      <i
        className={`material-icons ${styles.cartItem__icon}`}
        onClick={() => removeFromCart(mainId)}
      >
        delete
      </i>
    </div>
  );
}
