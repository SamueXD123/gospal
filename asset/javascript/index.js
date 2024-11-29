import { citasBiblicas } from './citasBiblicas.js';
const btnEnviar = document.querySelector("#enviar")
const inputNombre = document.querySelector("#nombre")

btnEnviar.addEventListener("click", function () {

    const nombre = inputNombre.value


    alert(`Nombre ingresado: ${nombre}`)
})



for (const cita of citasBiblicas) {
    const contenedor = document.createElement('div');
    contenedor.classList.add('cita-container');

    contenedor.innerHTML = `
        <h3>${cita.cita}</h3>
        <p><strong>Versículo:</strong> ${cita.texto}</p>
        <p><strong>Paráfrasis:</strong> ${cita.parafraseo}</p>
        // <img src="${cita.imagen}" alt="Imagen de la cita">
    `;

    document.body.appendChild(contenedor);
    console.log(contenedor);
}

