import styles from "./navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <a>
          <img src="src\assets\navbar\logo.svg" alt="coffee delivery icon"></img>
        </a>
      </div>
      <div className={styles.buttons}>
        <button className={styles.location}>
          <img src="src\assets\navbar\location.svg" alt="location"/>
          <p>Torrefarrera, CA</p>
        </button>
        <button className={styles.cart}>
          <img src="src\assets\navbar\cart.svg" alt="shopping cart"/>
        </button>
      </div>
    </nav>
  );
}
