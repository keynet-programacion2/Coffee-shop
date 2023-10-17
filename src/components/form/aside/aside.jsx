import styles from "./aside.module.css";
import { AsideData } from "./aside-data/aside-data";
import  {calculateTotals} from "./aside-data/aside-data";
import { formatPriceInEUR } from "../../../utils/format";

let INITIAL_VALUES = {
  totalArticles: 0,
  totalDelivery: 3.5,
  total: 0,
};



export function Aside({ cart, less, more}) {
  calculateTotals({cart},INITIAL_VALUES);

  return (
    <div className={styles.container}>
      <div className={styles.containertotal}>
        <div>
        <AsideData cart={cart} less={less} more={more}/>
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
        <a href="/delivery">
          <button>confirmar pedido</button>
        </a>
      </div>
    </div>
  );
}
