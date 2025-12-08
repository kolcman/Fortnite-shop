import { useEffect, useState } from "react";
import styles from "./Shop.module.css";
import { API_KEY, API_URL } from "../../config";
import Preloader from "../Preloader/Preloader";
import ItemList from "../ItemList/ItemList";
import Cart from "../Cart/Cart";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  async function getGoods() {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const data = await response.json();
    data.shop && setItems(data.shop);
    setLoading(false);
  }

  const addItemToCart = (item) => {
    setOrder((prev) => [...prev, item]);
  };

  useEffect(() => {
    getGoods();
  }, []);

  return (
    <main className={`${styles.container}`}>
      <Cart quantity={order.length} />
      {loading ? (
        <Preloader />
      ) : (
        <ItemList addItemToCart={addItemToCart} items={items} />
      )}
    </main>
  );
}
