import { citasBiblicas } from './citasBiblicas.js';

const btnEnviar = document.querySelector("#enviar");
const inputNombre = document.querySelector("#nombre");

const mainContainer = document.createElement("div");
mainContainer.id = "citas-container";
document.body.appendChild(mainContainer);

btnEnviar.addEventListener("click", function () {
    const nombre = inputNombre.value;

    if (!nombre) {
        alert("Por favor, ingresa tu nombre.");
        return;
    }

    mainContainer.innerHTML = "";

    const citaAleatoria = citasBiblicas[Math.floor(Math.random() * citasBiblicas.length)];

    const contenedor = document.createElement('div');
    contenedor.classList.add('cita-container');

    contenedor.innerHTML = `
        <h3>${citaAleatoria.cita}</h3>
        <p><strong>Versículo:</strong> ${citaAleatoria.texto}</p>
        <p><strong>Paráfrasis:</strong> ${citaAleatoria.parafraseo}</p>
        <p style="color: green; font-weight: bold;">Esta promesa es para ti, ${nombre}.</p>
    `;

    mainContainer.appendChild(contenedor);

    inputNombre.value = "";

    alert(`Nombre ingresado: ${nombre}. Se ha agregado una nueva promesa.`);
});
