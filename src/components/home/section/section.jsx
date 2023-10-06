import styles from "./section.module.css";

export function Section() {
  return (
    <div className={styles.content}>
      <img
        className={styles.img}
        src="src\assets\section\coffee_delivery_image.png"
        alt="coffee image"
      />

      <h1 className={styles.title}>
        Encuentra el café perfecto para cualquier momento del día
      </h1>
      <p className={styles.text}>
        Con Coffee Delivery obtienes tu café donde quiera que estés, en
        cualquier momento
      </p>
      <div>
        <div className={styles.cart} >
          <img src="src\assets\section\cart.svg"/><p> Compra sencilla y segura</p>
        </div>
        <div className={styles.box}>
        <img src="src\assets\section\box.svg"/> <p>El empaque mantiene el café intacto</p>
        </div>
        <div className={styles.time}>
        <img src="src\assets\section\time.svg"/> <p>Entrega rápida y con seguimiento</p>
        </div>
        <div className={styles.coffee}>
        <img src="src\assets\section\coffee.svg"/><p>El café te llega fresco</p>
        </div>
      </div>
    </div>
  );
}
