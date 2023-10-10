import React, { Component } from "react";
import styles from "./form.module.css";
import { Navbar } from "../navbar/navbar";
import { Section } from "./section/section";
import { Aside } from "./aside/aside";

export function Form() {
  return (
    <div className="wrapper">
      <Navbar />
      <div className={styles.container}>
        <div className={styles.section}>
          <h2>Completa tu pedido</h2>
          < Section />
        </div>
        <div className={styles.aside}>
          <h2>cafés seleccionados</h2>
          < Aside />
        </div>
      </div>
    </div>
  );
}
