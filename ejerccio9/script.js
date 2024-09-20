// Capturamos el formulario
const tempForm = document.getElementById('tempForm');

// Función para convertir Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Función para evaluar la temperatura en Fahrenheit
function evaluarTemperatura(fahrenheit) {
    if (fahrenheit >= 14 && fahrenheit <= 32) {
        return "Temperatura baja";
    } else if (fahrenheit > 32 && fahrenheit <= 68) {
        return "Temperatura adecuada";
    } else if (fahrenheit > 68 && fahrenheit <= 96) {
        return "Temperatura alta";
    } else {
        return "Temperatura desconocida";
    }
}

// Evento del formulario para convertir y evaluar la temperatura
tempForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitamos que el formulario se envíe

    // Obtenemos el valor ingresado por el usuario
    const celsius = parseFloat(document.getElementById('celsius').value);

    // Verificamos si el valor ingresado es un número válido
    if (isNaN(celsius)) {
        alert("Por favor, ingresa una temperatura válida en Celsius.");
        return;
    }

    // Convertimos a Fahrenheit
    const fahrenheit = celsiusToFahrenheit(celsius);

    // Evaluamos la temperatura
    const resultado = evaluarTemperatura(fahrenheit);

    // Mostramos los resultados en las etiquetas correspondientes
    document.getElementById('fahrenheitResult').textContent = `${fahrenheit.toFixed(2)} °F`;
    document.getElementById('evaluationResult').textContent = resultado;
});
