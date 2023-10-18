import styles from "./article.module.css";
import coffiesData from "../../../conts/coffes";
import { ArticleItem } from "./article-item";
import { useContext } from "react";
import { CartContext } from "../../../lib/context/CartContext";

export function Article() {

  const { addToCart } = useContext(CartContext)

  return (
    <div>
      <h2 className={styles.title}>Nuestros cafés</h2>
      <div className={styles.content}>
        {coffiesData.map((item) => (
          <ArticleItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>    
  );
}
