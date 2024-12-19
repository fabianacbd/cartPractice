import "./Navbar.css";

const template = () =>
  `<h1>BIANCA</h1>
      <nav>
      <label for="sandwich">☰</label>
      <input id="sandwich" type="checkbox"/>
      <ul class="ul_nav">
        <li>
          <a href="#" id="homelink">Home</a>
        </li>
        <li>
          <a href="#" id="abrigoslink">Abrigos</a>
        </li>
        <li>
          <a href="#" id="pants">Pants</a>
        </li>
        <li>
          <a href="#" id="looklink">Looks</a>
        </li>
        <li>
          <a href="#" id="shoes">Shoes</a>
        </li>
    </div>
      </ul>
      <span class="cart-icon" id="cartToggle">🛒 COMPRAR</span>
      <div class="cart-dropdown" id="cartDropdown">
        <p id="cartMessage">El carrito está vacío.</p>
      </div>
    </nav>`;

const Navbar = () => {
  document.querySelector("header").innerHTML = template();
  document.getElementById("cartToggle").addEventListener("click", () => {
    const dropdown = document.getElementById("cartDropdown");
    dropdown.classList.toggle("active");
  });
};

export default Navbar;
