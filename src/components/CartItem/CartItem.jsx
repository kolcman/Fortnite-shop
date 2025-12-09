import styles from "./CartItem.module.css";

export default function CartItem(props) {
  const {
    mainId: id,
    displayName: name,
    price: { finalPrice: price } = {},
    displayAssets = [],
  } = props;

  const image = displayAssets[0]?.full_background || "";

  return (
    <div className={`${styles.cartItem}`} id={id}>
      <img
        className={`${styles.cartItem__img}`}
        src={image ? image : "/src/assets/img-placeholder.png"}
        alt={name}
      />
      <span>{name}</span>
      <span>{price} coins</span>
    </div>
  );
}
