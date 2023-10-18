import { useContext } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../lib/context/CartContext";

export function Navbar() {

  const { cartCount } = useContext(CartContext)

  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} to="/">
        <img src="/assets/navbar/logo.svg" alt="coffee delivery icon"></img>
      </Link>
      <div className={styles.buttons}>
        <button className={styles.location}>
          <img src="/assets/navbar/location.svg" alt="location" />
          Torrefarrera, CA
        </button>
        <Link to="/form">
          <button className={styles.cart}>
            <img src="/assets/navbar/cart.svg" alt="shopping cart" />
            <span className={styles.items}>{cartCount}</span>
          </button>
        </Link>
      </div>
    </nav>
  );
}
