import { citasBiblicas } from '../javascript/citasBiblicas.js';

const btnEnviar = document.querySelector("#enviar");
const inputNombre = document.querySelector("#nombre");

// // Crear contenedor principal
const mainContainer = document.createElement("div");
mainContainer.id = "citas-container";
mainContainer.style.margin = "20px auto";
mainContainer.style.maxWidth = "800px";
mainContainer.style.textAlign = "center";
document.body.appendChild(mainContainer);

// // Evento para manejar clic en el botón "Enviar"
// btnEnviar.addEventListener("click", function () {
//     const nombre = inputNombre.value.trim();

//     if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
//         alert("Por favor, ingresa un nombre válido (solo letras y espacios).");
//         return;
//     }


//     mainContainer.innerHTML = "";
//     agregarCitaAleatoria(nombre);

//     inputNombre.value = "";
//     alert(`Nombre ingresado: ${nombre}. Se ha agregado una nueva promesa.`);
// });

// // Función para agregar una cita aleatoria
// function agregarCitaAleatoria(nombre) {
//     const citaAleatoria = citasBiblicas[Math.floor(Math.random() * citasBiblicas.length)];
//     console.log(citaAleatoria)


//     const contenedor = document.createElement("div");
//     contenedor.classList.add("cita-container");
//     contenedor.style.border = "1px solid #ccc";
//     contenedor.style.borderRadius = "10px";
//     contenedor.style.padding = "20px";
//     contenedor.style.margin = "20px auto"; // Márgenes automáticos
//     contenedor.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
//     contenedor.style.display = "flex";
//     contenedor.style.flexDirection = "column";
//     contenedor.style.alignItems = "center";
//     contenedor.style.width = "80%";
//     contenedor.style.maxWidth = "400px";

//     contenedor.innerHTML = `
//     <h3>${citaAleatoria.cita}</h3>
//     <p><strong>Versículo:</strong> ${citaAleatoria.texto}</p>
//     <p><strong>Lo que quiere decir es:</strong> ${citaAleatoria.parafraseo}</p>
//     <img src="${citaAleatoria.imagen}" alt="Imagen Bíblica" style="max-width: 100%; height: auto;">
//     <p style="color: green; font-weight: bold;">Esta promesa es para ti, ${nombre}.</p>
// `;

//     mainContainer.appendChild(contenedor);

// }


// const codigoQRDiv = document.getElementById('codigo-qr');
// const codigoQR = new QRCode(codigoQRDiv, {
//     text: "https://symphonious-bienenstitch-5d811b.netlify.app/",
//     width: 200,
//     height: 200,
//     colorDark: '#000000',
//     colorLight: '#ffffff',
//     // correctLevel: QRCode.CorrectLevel.H
// });



function mostrarFormulario() {
    const formulario = `
        <div class="input">
            <label for="">Nombre:</label>
            <input placeholder="Escribe aqui tu nombre" type="text" name="nombre" id="nombre">
            <button id="enviar">Enviar</button>
        </div>
    `;

    mainContainer.innerHTML = formulario;

    // Reasignar eventos al botón de enviar
    const btnEnviar = document.querySelector("#enviar");
    const inputNombre = document.querySelector("#nombre");

    btnEnviar.addEventListener("click", function () {
        const nombre = inputNombre.value.trim();

        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
            alert("Por favor, ingresa un nombre válido (solo letras y espacios).");
            return;
        }

        mainContainer.innerHTML = "";
        agregarCitaAleatoria(nombre);

        inputNombre.value = "";
        alert(`Nombre ingresado: ${nombre}. Se ha agregado una nueva promesa.`);
    });
}



function agregarCitaAleatoria(nombre) {
    const citaAleatoria = citasBiblicas[Math.floor(Math.random() * citasBiblicas.length)];
    console.log(citaAleatoria);

    const contenedor = document.createElement("div");
    contenedor.classList.add("cita-container");
    contenedor.style.border = "1px solid #ccc";
    contenedor.style.borderRadius = "10px";
    contenedor.style.padding = "20px";
    contenedor.style.margin = "20px auto";
    contenedor.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    contenedor.style.display = "flex";
    contenedor.style.flexDirection = "column";
    contenedor.style.alignItems = "center";
    contenedor.style.width = "80%";
    contenedor.style.maxWidth = "400px";

    contenedor.innerHTML = `
        <h3>${citaAleatoria.cita}</h3>
        <p><strong>Versículo:</strong> ${citaAleatoria.texto}</p>
        <p><strong>Lo que quiere decir es:</strong> ${citaAleatoria.parafraseo}</p>
        <img src="${citaAleatoria.imagen}" alt="Imagen Bíblica" style="max-width: 100%; height: auto;">
        <p style="color: green; font-weight: bold;">Esta promesa es para ti, ${nombre}.</p>
    `;

    // Botón de regresar
    const btnRegresar = document.createElement("button");
    btnRegresar.textContent = "Regresar";
    btnRegresar.style.marginTop = "20px";
    btnRegresar.style.padding = "10px 20px";
    btnRegresar.style.border = "none";
    btnRegresar.style.backgroundColor = "#007BFF";
    btnRegresar.style.color = "white";
    btnRegresar.style.borderRadius = "5px";
    btnRegresar.style.cursor = "pointer";

    btnRegresar.addEventListener("click", function () {
        mainContainer.innerHTML = ""; // Limpia el contenedor
        mostrarFormulario(); // Muestra el formulario nuevamente
    });

    contenedor.appendChild(btnRegresar);
    mainContainer.appendChild(contenedor);
}



document.addEventListener("DOMContentLoaded", () => {
    mostrarFormulario();
});
