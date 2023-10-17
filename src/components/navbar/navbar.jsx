import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

export function Navbar({ counter }) {
  return (
    <nav className={styles.nav}>      
      <Link className={styles.logo} to="/">
        <img src="/assets/navbar/logo.svg" alt="coffee delivery icon"></img>
      </Link>
      <div className={styles.buttons}>
        <button className={styles.location}>
          <img src="/assets/navbar/location.svg" alt="location"/>
          Torrefarrera, CA
        </button>
        <button className={styles.cart}>
           <Link to="/form">
            {counter}
            <img src="/assets/navbar/cart.svg" alt="shopping cart"/>            
           </Link>          
        </button>
      </div>
    </nav>
  );
}
