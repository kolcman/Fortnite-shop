import { useEffect, useState } from "react";
import styles from "./Shop.module.css";
import { API_KEY, API_URL } from "../../config";
import Preloader from "../Preloader/Preloader";
import ItemList from "../ItemList/ItemList";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getGoods() {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    });
    console.log("STATUS:", response.status);
    const data = await response.json();
    console.log("DATA:", data); // ← важно
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
