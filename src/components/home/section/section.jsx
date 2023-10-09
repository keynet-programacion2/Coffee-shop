import styles from "./section.module.css";

export function Section() {
  return (
    <div className={styles.content}>
      <img
        className={styles.img}
        src="/assets/section/coffee_delivery_image.png"
        alt="coffee image"
      />
      <h1 className={styles.title}>
        Encuentra el café perfecto para cualquier momento del día
      </h1>
      <p className={styles.text}>
        Con Coffee Delivery obtienes tu café donde quiera que estés, en
        cualquier momento
      </p>
      <div className={styles.advantages}>
        <div className={styles.cart}>
          <img src="/assets/section/cart.svg" />
          <span>Compra sencilla y segura</span>
        </div>
        <div className={styles.box}>
          <img src="/assets/section/box.svg" />
          <span>El empaque mantiene el café intacto</span>
        </div>
      </div>
      <div className={styles.advantages}>
        <div className={styles.time}>
          <img src="/assets/section/time.svg" />
          <span>Entrega rápida y con seguimiento</span>
        </div>
        <div className={styles.coffee}>
          <img src="/assets/section/coffee.svg" />
          <span>El café te llega fresco</span>
        </div>
      </div>
    </div>
  );
}
