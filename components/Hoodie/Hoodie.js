
import { Abrigos } from "../Abrigos/Abrigos";
import { cleanPage } from "../../utils/cleanPage";
import dataAbrigos from "../../data/data";

export const Hoodie = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = Abrigos();

  const addCartListener = () => {
    const buttons = document.querySelectorAll(".botoncomprar");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const container = document.querySelector("#cartDropdown");
        const hiddenMessage = document.querySelector("#cartMessage");
        hiddenMessage.classList.add("cartMessage-hidden");

        const abrigos = dataAbrigos.abrigos;

        const buttonId = button.id;
        const productId = buttonId.split("-")[1];

        const selectedAbrigos = abrigos[productId];

        // Crear el HTML del producto seleccionado
        const selectedProductHTML = `
          <li id="product-${productId}">
            <img src="${selectedAbrigos.img}" alt="${selectedAbrigos.name}" />
            <p>${selectedAbrigos.name}</p>
            <p>${selectedAbrigos.price}</p>
            <button class="btnEliminar" onclick="eliminarProducto('${productId}')">Eliminar</button>
          </li>
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


// import { Abrigos } from "../../components/Abrigos/Abrigos";
// import { cleanPage } from "../../utils/cleanPage";


// export const Hoodie = () => {
//   const main = document.querySelector("main");
//   cleanPage(main);
//  main.innerHTML = Abrigos()
//   };