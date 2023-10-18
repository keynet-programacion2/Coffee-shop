import React, { Component, useContext } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./form.module.css";
import { Aside } from "./aside/aside";
import { CartContext } from "../../lib/context/CartContext";

export function Form() {
  const {saveinfo}= useContext(CartContext)
  const navigate = useNavigate();
  
  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    let paymentMethod;


    if (data.type === "1") {
      paymentMethod = "Tarjeta de crédito";
    } else if (data.type === "2") {
      paymentMethod = "Tarjeta de débito";
    } else if (data.type === "3") {
      paymentMethod = "Contado";
    }
  
    const info = {
      street: data.fstreet,
      number:  data.fnumber,
      population:  data.fpopulation,
      province:  data.fprovince,
      paymentMethod: paymentMethod
    }
    saveinfo(info);        
    navigate("/delivery");      
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.titles} >Completa tu pedido</h2>
          <div>
      <div className={styles.adress}>
        <div>
          <div>
            <div className={styles.img}>
              <img src="/assets/form/location.svg" alt="location" />
            </div>
            <div>
              <div className={styles.title}>Dirección de entrega</div>
              <div className={styles.subtitle}>
                Introduce la dirección donde quieres recibir tu pedido
              </div>
            </div>
          </div>          
            <input
            className={styles.code}
            type="text"
            name="fcode"
            placeholder="Código postal"
            required
          />
            <input
            className={styles.street}
            type="text"
            name="fstreet"
            placeholder="Calle"
            required
          />
            <input
            className={styles.number}
            type="text"
            name="fnumber"
            placeholder="Número"
            required
          />

          <div className={styles.extra}>
               <input            
            type="text"
            name="fextra"
            placeholder="Complemento"
          />
            <span  className={styles.extraoptional}>Opcional</span>
            </div>

        <input
            className={styles.population}
            type="text"
            name="fpopulation"
            placeholder="Población"
            required
          />
               <input
            className={styles.province}
            type="text"
            name="fprovince"
            placeholder="Provincia"
            required
          />          
        </div>
      </div>
      <div className={styles.payment}>
        <div>
          <div>
            <div className={styles.img}>
              <img src="/assets/form/money.svg" alt="location" />
            </div>
            <div>
              <div className={styles.title}>Pago</div>
              <div className={styles.subtitle}>
                El pago se realiza contra entrega. Elige la forma en que quieres
                pagar
              </div>
              <div className={styles.options}>
            <input type="radio" value="1" name="type" id="r1" className={styles.radios} required/>
            <label htmlFor="r1"className={styles.labels1}
              ><img src="/assets/form/credit.svg" /> tarjeta de crédito</label>
            <input type="radio" value="2" name="type" id="r2" className={styles.radios} />
            <label htmlFor="r2" className={styles.labels2}
              ><img src="/assets/form/debit.svg" /> tarjeta de débito</label>
            <input type="radio" value="3" name="type" id="r3" className={styles.radios}/>
            <label htmlFor="r3" className={styles.labels2}
              ><img src="/assets/form/cash.svg" /> contado</label>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
        <div className={styles.aside}>
          <h2 className={styles.titles}>cafés seleccionados</h2>
          <Aside />
        </div>
      </div>
    </form>
  );
}
