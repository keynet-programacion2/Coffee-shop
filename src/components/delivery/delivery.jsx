import React, { Component } from "react";
import styles from "./delivery.module.css";
import { Navbar } from "../navbar/navbar";

export function Delivery() {
  return (
    <div className="wrapper">
      <Navbar />
      <div className={styles.container}>
        <div className={styles.section}>
          <h2>¡Eh! orden confirmada</h2>
          <h3>Ahora solo espera que el café te llegue pronto.</h3>
 
            <div className={styles.infodelivery}>
                
            </div>
            <div className={styles.img}>
            <img src="/assets/delivery/delivery.png" alt="rider"/>
            </div>
      
        </div>
      </div>
    </div>
  );
}
