import styles from "./Cart.module.css";

export default function Cart(props) {
  const { quantity = 0 } = props;

  return (
    <div className={`${styles.cart}`}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? (
        <span className={`${styles.cart__quantity}`}>{quantity}</span>
      ) : null}
    </div>
  );
}
