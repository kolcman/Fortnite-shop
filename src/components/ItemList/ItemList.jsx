import styles from "./ItemList.module.css";
import ItemCard from "../ItemCard/ItemCard";

export default function ItemList(props) {
  const { items = [] } = props;

  if (!items.length) {
    return <h3>Товар временно отсутствует</h3>;
  }

  return (
    <div className={`${styles.items}`}>
      {items.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </div>
  );
}
