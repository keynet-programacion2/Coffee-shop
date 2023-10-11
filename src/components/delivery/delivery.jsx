import React, { Component } from "react";
import styles from "./delivery.module.css";

export function Delivery() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2>¡Eh! orden confirmada</h2>
          <h3>Ahora solo espera que el café te llegue pronto.</h3>

          <div className={styles.infodelivery}>
            <div className={styles.module}>
              <div className={styles.location}>
                <div className={styles.imagescontainer}>
                  <img src="/assets/delivery/location.svg" />
                </div>
                <div>
                  <span className={styles.text}>
                    Entrega en <b>Av. de lleida, 120</b>
                  </span>
                  <span className={styles.text}>Torrefarrera - Lleida</span>
                </div>
              </div>
              <div className={styles.time}>
                <div className={styles.imagescontainer}>
                  <img src="/assets/delivery/time.svg" />
                </div>
                <div>
                  <span className={styles.text}>Previsión de entrega</span>
                  <span className={styles.text}>
                    <b>20 min - 30 min </b>
                  </span>
                </div>
              </div>
              <div className={styles.money}>
                <div className={styles.imagescontainer}>
                  <img src="/assets/delivery/money.svg" />
                </div>
                <div>
                  <span className={styles.text}>Pago a la entrega</span>
                  <span className={styles.text}>
                    <b>Targeta de crédito </b>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.img}>
            <img src="/assets/delivery/delivery.png" alt="rider" />
          </div>
        </div>
      </div>
    </div>
  );
}
