import React, { Component } from "react";
import styles from "./form.module.css";
import { Section } from "./section/section";
import { Aside } from "./aside/aside";

export function Form({ cart, less, more}) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.titles} >Completa tu pedido</h2>
          <Section />
        </div>
        <div className={styles.aside}>
          <h2 className={styles.titles}>cafés seleccionados</h2>
          <Aside  cart={cart} less={less} more={more} />
        </div>
      </div>
    </div>
  );
}
