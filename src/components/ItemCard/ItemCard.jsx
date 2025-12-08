import { useCart } from "../../context/CartContext";
import styles from "./ItemCard.module.css";

export default function ItemCard(props) {
  const {
    mainId: id,
    displayName: name,
    displayDescription: description,
    price: { finalPrice: price } = {},
    displayAssets = [],
  } = props;

  const { addItemToCart } = useCart();

  const image = displayAssets[0]?.full_background || "";

  return (
    <div className={` ${styles.card}`} id={id}>
      <img
        className={`${styles.card__image}`}
        src={image ? image : "/src/assets/img-placeholder.png"}
        alt={name}
      />
      <div className={`${styles.card__content} `}>
        <h6 className={`${styles.card__title}`}>{name}</h6>
        <p className={`${styles.card__description}`}>
          {description ? description : null}
        </p>
        <div className={`${styles.card__control}`}>
          <span className={`${styles.card__price}`}>
            {price} <span className={`${styles.card__coin}`}>coins</span>
          </span>
          <button
            className={`${styles.card__btn}`}
            onClick={() => addItemToCart(props)}
          >
            Купить
          </button>
        </div>
      </div>
    </div>
  );
}
