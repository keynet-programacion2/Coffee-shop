import styles from "./article.module.css";
import coffiesData from "../../../conts/coffes";
import Counter from "./counter/counter";

const formatPriceInEUR = (price) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price);
};

export function Article() {
  return (
    <div>
      <h2 className={styles.title}>Nuestros cafés</h2>
      <div className={styles.content}>
        {coffiesData.map((item) => (
          <div className={styles.card} key={item.id}>
            <div className={styles.cardcontent}>
              <img src={item.image} alt={item.name}></img>
              <div className={styles.tags}>
                {item.tag.map((tag) => (
                  <span key={item.tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h3 className={styles.name}>{item.name}</h3>
            <p className={styles.description}>{item.description}</p>
            <div className={styles.cardfooter}>
              <span className={styles.price}>
                {formatPriceInEUR(item.price)}
              </span>
             <div className={styles.buttons}>
             <div className={styles.counter}>
                <Counter />
              </div>
              <button className={styles.cartbutton}>
                <img
                  className={styles.cart}
                  src="/assets/article/ShoppingCartSimple.svg"
                />
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
