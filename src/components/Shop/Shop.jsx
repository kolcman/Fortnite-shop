import { useEffect, useState } from "react";
import { API_KEY, API_URL } from "../../config";
import ItemList from "../ItemList/ItemList";
import Preloader from "../Preloader/Preloader";
import styles from "./Shop.module.css";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    getGoods();
  }, []);

  return (
    <main className={`${styles.container}`}>
      {loading ? <Preloader /> : <ItemList items={items} />}
    </main>
  );
}
