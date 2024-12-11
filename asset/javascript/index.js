import { citasBiblicas } from '../javascript/citasBiblicas.js';

const btnEnviar = document.querySelector("#enviar");
const inputNombre = document.querySelector("#nombre");
const formContainer = document.querySelector(".flexbox");

const mainContainer = document.createElement("div");
mainContainer.id = "citas-container";
mainContainer.style.margin = "20px auto";
mainContainer.style.maxWidth = "800px";
mainContainer.style.textAlign = "center";
document.body.appendChild(mainContainer);

btnEnviar.addEventListener("click", function () {
    const nombre = inputNombre.value.trim();

    // Validar si el nombre está vacío
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return; // Detener el resto del código si el nombre está vacío
    }

    // Validar que el nombre solo contenga letras y espacios
    const nombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre);
    if (!nombreValido) {
        alert("Por favor, ingresa un nombre válido (solo letras y espacios).");
        return; // Detener el resto del código si la validación falla
    }

    // Si el nombre es válido, continuar con el resto de la lógica
    formContainer.style.display = "none"; // Ocultar el formulario

    // Limpiar la sección de citas
    mainContainer.innerHTML = "";

    // Agregar la cita aleatoria
    agregarCitaAleatoria(nombre);

    // Limpiar el campo de entrada
    inputNombre.value = "";

    fetch('http://localhost:4000/registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre: nombre })  // Nombre del visitante
    })
        .then(response => response.json())
        .then(data => {
            console.log("Registro exitoso:", data);
        })
        .catch(error => {
            console.error("Error al registrar:", error);
        });


    function agregarCitaAleatoria(nombre) {
        const citaAleatoria = citasBiblicas[Math.floor(Math.random() * citasBiblicas.length)];

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
            <button id="volver" style="margin-top: 20px; padding: 10px 20px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">
                Volver al formulario
            </button>
        `;

        mainContainer.appendChild(contenedor);

        const btnVolver = document.querySelector("#volver");
        btnVolver.addEventListener("click", function () {
            mainContainer.innerHTML = "";
            formContainer.style.display = "block";
        });
    }
});
