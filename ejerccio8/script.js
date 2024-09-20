// Capturamos el formulario
const multiplicationForm = document.getElementById('multiplicationForm');

// Función para generar la tabla de multiplicar del 1 al 10
function generarTablaMultiplicar(numero) {
    let tabla = ''; // Variable para almacenar la tabla

    for (let i = 1; i <= 10; i++) {
        // Generamos cada multiplicación
        tabla += `${numero} x ${i} = ${numero * i}<br>`;
    }

    return tabla; // Retornamos la tabla como string
}

// Agregamos el evento de submit al formulario
multiplicationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitamos que el formulario se envíe

    // Obtenemos el número ingresado por el usuario
    const numero = parseInt(document.getElementById('numero').value);

    // Verificamos que el valor ingresado sea un número válido
    if (isNaN(numero)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    // Llamamos a la función para generar la tabla y la mostramos en el HTML
    const resultado = generarTablaMultiplicar(numero);
    document.getElementById('tablaResultado').innerHTML = resultado;
});
