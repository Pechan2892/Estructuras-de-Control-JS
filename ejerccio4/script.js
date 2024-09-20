// Capturamos el formulario
const compareForm = document.getElementById('compareForm');

// Función para comparar dos números y devolver el mayor
function compararNumeros(num1, num2) {
    if (num1 > num2) {
        return `El número mayor es: ${num1}`;
    } else if (num2 > num1) {
        return `El número mayor es: ${num2}`;
    } else {
        return 'Ambos números son iguales.';
    }
}

// Agregamos el evento de submit para hacer la comparación
compareForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores ingresados por el usuario
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    // Llamamos a la función y mostramos el resultado
    const resultado = compararNumeros(num1, num2);
    document.getElementById('result').textContent = resultado;
});
