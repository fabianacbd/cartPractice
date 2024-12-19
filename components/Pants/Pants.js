import "./Pants.css";
import data from "../../data/data";

const { pants } = data;

export const Pants = () => {
  // Genera los elementos de la lista dinámicamente
  const pantsList = Object.keys(pants)
    .map(
      (key) => `
      <li>
        <img src="${pants[key].img}" alt="${pants[key].name}"/>
        <p>${pants[key].name}</p>
        <p>${pants[key].price}</p>
        <button id="botoncomprar-${key}" class="botoncomprar">Comprar</button>
      </li>`
    )
    .join("");

  // Devuelve el HTML del componente
  return `
    <h3>Pantalones ➜</h3>
    <section id="pants">
      <ul>
        ${pantsList}
      </ul>
    </section>
  `;
};
