// Capturamos el formulario
const ageForm = document.getElementById('ageForm');

// Agregamos el evento de submit para el formulario
ageForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener la edad ingresada por el usuario y convertirla a número
    const ageInput = document.getElementById('age');
    const age = parseInt(ageInput.value, 10);

    // Verificar en la consola que estemos obteniendo el valor correcto
    console.log("Edad ingresada:", age);

    // Verificamos si la edad es un número válido
    if (isNaN(age) || age < 0) {
        document.getElementById('result').textContent = 'Por favor, ingresa una edad válida.';
        return;
    }

    // Realizar la verificación con el operador ternario
    const message = age >= 18 ? 'Eres mayor de edad.' : 'No eres mayor de edad.';

    // Mostrar el resultado en el elemento <p>
    document.getElementById('result').textContent = message;

    // Verificar que el mensaje se esté actualizando correctamente
    console.log("Mensaje mostrado:", message);
});
