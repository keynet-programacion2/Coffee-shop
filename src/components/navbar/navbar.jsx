import "./navbar.css";

export function Navbar() {
  return (
    <nav>
      <div class="logo">
        <a>
          <img src="src\assets\navbar\logo.svg" alt="coffee delivery icon"></img>
        </a>
      </div>
      <div class="buttons">
        <button class="location">
          <img src="src\assets\navbar\location.svg" alt="location"/>
          <p>Torrefarrera, CA</p>
        </button>
        <button class="cart">
          <img src="src\assets\navbar\cart.svg" alt="shopping cart"/>
        </button>
      </div>
    </nav>
  );
}
