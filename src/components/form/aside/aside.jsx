import styles from "./aside.module.css";

export function Aside() {
  return (
    <div className={styles.container}>
      <div className={styles.containertotal}>
        <div className={styles.articles}>
          <div>Articulos totales</div>
          <div className={styles.money}>0,00 €</div>
        </div>
        <div className={styles.delivery}>
          <div>Entrega</div>
          <div className={styles.money}>0,00 €</div>
        </div>
        <div className={styles.total}>
          <div>Total</div>
          <div className={styles.money}>0,00 €</div>
        </div>
      </div>
      <div className={styles.button}>
        <button>confirmar pedido</button>
      </div>
    </div>
  );
}
