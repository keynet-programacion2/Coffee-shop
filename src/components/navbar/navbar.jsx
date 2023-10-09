import styles from "./navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.nav}>      
      <a className={styles.logo} href="#">
        <img src="/assets/navbar/logo.svg" alt="coffee delivery icon"></img>
      </a>      

      <div className={styles.buttons}>
        <button className={styles.location}>
          <img src="/assets/navbar/location.svg" alt="location"/>
          Torrefarrera, CA
        </button>
        <button className={styles.cart}>
          <img src="/assets/navbar/cart.svg" alt="shopping cart"/>
        </button>
      </div>
    </nav>
  );
}
