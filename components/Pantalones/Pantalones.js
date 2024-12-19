

import { Pants } from "../Pants/Pants";
import { cleanPage } from "../../utils/cleanPage";
import dataPants from "../../data/data";

export const Pantalones = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = Pants();

  const addCartListener = () => {
    const buttons = document.querySelectorAll(".botoncomprar");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const container = document.querySelector("#cartDropdown");
        const hiddenMessage = document.querySelector("#cartMessage");
        hiddenMessage.classList.add("cartMessage-hidden");

        const pantalones = dataPants.pants;

        const buttonId = button.id;
        const productId = buttonId.split("-")[1];

        const selectedPant = pantalones[productId];

        // Crear el HTML del producto seleccionado
        const selectedProductHTML = `<section id="seleccionado">
          <li id="product-${productId}">
            <img src="${selectedPant.img}" alt="${selectedPant.name}" />
            <p>${selectedPant.name}</p>
            <p>${selectedPant.price}</p>
            <button class="btnEliminar" onclick="eliminarProducto('${productId}')">Eliminar</button>
          </li>
          </section>
        `;

        // Añadir el producto al carrito
        container.innerHTML += selectedProductHTML;
      });
    });
  };

  // Función para eliminar el producto del carrito
  window.eliminarProducto = (productId) => {
    const productElement = document.querySelector(`#product-${productId}`);
    if (productElement) {
      productElement.remove(); // Eliminar el producto del carrito
    }

    // Si el carrito está vacío, mostrar el mensaje de carrito vacío
    const container = document.querySelector("#cartDropdown");
    const hiddenMessage = document.querySelector("#cartMessage");
    if (container.querySelector("li") === null) {
      hiddenMessage.classList.remove("cartMessage-hidden");
    }
  };

  // Llamar a la función para agregar los listeners
  addCartListener();
};
