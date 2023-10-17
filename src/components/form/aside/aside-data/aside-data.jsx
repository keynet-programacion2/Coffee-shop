import styles from "./aside-data.module.css";
import { formatPriceInEUR } from "../../../../utils/format";
import coffiesData from "../../../../conts/coffes";

export function AsideData({ cart, less, more}) {
  const information = cart.map((item) => {
    const coffee = coffiesData.find((c) => c.id === item.id);
    return {
      id: item.id,
      name: coffee.name,
      image: coffee.image,
      price: coffee.price,
      units: item.units,
    };
  });

  return (
    <div>
      {information.map((item) => (
        <div key={item.id} className={styles.card}>
          <div className={styles.imagediv}>
            <img src={item.image} alt={item.name} className={styles.image} />
          </div>
          <div className={styles.info}>
            <div className={styles.text}>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.price}>
                {formatPriceInEUR(item.price)}
              </span>
            </div>
            <div className={styles.counter}>
              <button onClick={() => less(item.id)}>
                <img src="/assets/article/counter/less.svg" />
              </button>
              <p>{item.units}</p>
              <button onClick={() => more(item.id)}>
                <img src="/assets/article/counter/more.svg" />
              </button>
            </div>
          </div>
            <button  onClick={() => delete(item.id)}> <img src="/assets/article/counter/less.svg"/>Eliminar</button>
        </div>
      ))}
    </div>
  );
}

export function calculateTotals({ cart }, INITIAL_VALUES) {
  let totalCalculate = 0.0;
  const information = cart.map((item) => {
    const coffee = coffiesData.find((c) => c.id === item.id);
    return {
      id: item.id,
      price: coffee.price,
      units: item.units,
    };
  });

  const calc = information.map((item) => {
    totalCalculate += item.price * item.units;
  });

  INITIAL_VALUES.totalArticles = totalCalculate;
  INITIAL_VALUES.total =
    INITIAL_VALUES.totalArticles + INITIAL_VALUES.totalDelivery;

  return INITIAL_VALUES;
}
