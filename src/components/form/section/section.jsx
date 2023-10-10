import styles from "./section.module.css";

export function Section() {
  return (
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
          <form>
            <input
            className={styles.code}
            type="text"
            name="fcode"
            placeholder="Código postal"
          />
            <input
            className={styles.street}
            type="text"
            name="fstreet"
            placeholder="Calle"
          />
            <input
            className={styles.number}
            type="text"
            name="fnumber"
            placeholder="Número"
          />
               <input
            className={styles.extra}
            type="text"
            name="fextra"
            placeholder="Complemento"
          />
          {/* <span  className={styles.extraoptional}>Opcional</span> */}
          <input
            className={styles.population}
            type="text"
            name="fpopulation"
            placeholder="Población"
          />
               <input
            className={styles.province}
            type="text"
            name="fprovince"
            placeholder="Provincia"
          />
          </form>
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
            <input type="radio" value="1" name="type" id="r1" className={styles.radios}/>
            <label for="r1"className={styles.labels1}
              ><img src="/assets/form/credit.svg" /> tarjeta de crédito</label>
            <input type="radio" value="2" name="type" id="r2" className={styles.radios} />
            <label for="r2" className={styles.labels2}
              ><img src="/assets/form/debit.svg" /> tarjeta de débito</label>
            <input type="radio" value="3" name="type" id="r3" className={styles.radios}/>
            <label for="r3" className={styles.labels2}
              ><img src="/assets/form/cash.svg" /> contado</label>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
