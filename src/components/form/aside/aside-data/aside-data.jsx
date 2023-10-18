import styles from "./aside-data.module.css";
import { formatPriceInEUR } from "../../../../utils/format";
import coffiesData from "../../../../conts/coffes";
import { useContext } from "react";
import { CartContext } from "../../../../lib/context/CartContext";



export function AsideData() {
  const {cart}= useContext(CartContext)

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
  const { lessUnity } = useContext(CartContext)
  const { moreUnity } = useContext(CartContext)
  const { deletecoffee } = useContext(CartContext)


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
              <button type="button" onClick={() => lessUnity(item.id)}>
                <img src="/assets/article/counter/less.svg" />
              </button>
              <p>{item.units}</p>
              <button type="button" onClick={() => moreUnity(item.id)}>
                <img src="/assets/article/counter/more.svg" />
              </button>
            </div>
            <div className={styles.delete}>
              <button type="button" onClick={() => deletecoffee(item.id)}>
                <img src="/assets/form/delete.svg" />
                Eliminar
              </button>
            </div>
          </div>
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
