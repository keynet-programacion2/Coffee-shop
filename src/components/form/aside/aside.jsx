import styles from "./aside.module.css";
import { AsideData } from "./aside-data/aside-data";
import  {calculateTotals} from "./aside-data/aside-data";
import { formatPriceInEUR } from "../../../utils/format";
import { CartContext } from "../../../lib/context/CartContext";
import { useContext } from "react";

let INITIAL_VALUES = {
  totalArticles: 0,
  totalDelivery: 3.5,
  total: 0,
};



export function Aside() {
  const {cart}= useContext(CartContext)
  calculateTotals({cart},INITIAL_VALUES);

  return (
    <div className={styles.container}>
      <div className={styles.containertotal}>
        <div>
        <AsideData/>
        </div>
        <div className={styles.articles}>
          <div>Articulos totales</div>
          <div className={styles.money}> {formatPriceInEUR(INITIAL_VALUES.totalArticles)}</div>
        </div>
        <div className={styles.delivery}>
          <div>Entrega</div>
          <div className={styles.money}>{formatPriceInEUR(INITIAL_VALUES.totalDelivery)}</div>
        </div>
        <div className={styles.total}>
          <div>Total</div>
          <div className={styles.money}>{formatPriceInEUR(INITIAL_VALUES.total)}</div>
        </div>
      </div>
      <div className={styles.button}>
        <button type="submit">confirmar pedido</button>
      </div>
    </div>
  );
}
