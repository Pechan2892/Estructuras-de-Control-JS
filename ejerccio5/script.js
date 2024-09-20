// Capturamos el formulario
const carForm = document.getElementById('carForm');

// Función para calcular el descuento basado en el coche seleccionado
function calcularDescuento(coche) {
    let descuento = 0;
    
    switch (coche) {
        case 'Ford Fiesta':
            descuento = 5; // 5% de descuento
            break;
        case 'Ford Focus':
            descuento = 10; // 10% de descuento
            break;
        case 'Ford Escape':
            descuento = 20; // 20% de descuento
            break;
        default:
            descuento = 0; // Si no es uno de los coches, no se aplica descuento
    }

    return descuento;
}

// Agregamos el evento de submit para calcular el descuento
carForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener el coche seleccionado
    const cocheSeleccionado = document.getElementById('car').value;

    // Si no se seleccionó un coche, mostrar mensaje de error
    if (cocheSeleccionado === "") {
        document.getElementById('result').textContent = "Por favor, selecciona un coche.";
        return;
    }

    // Calcular el descuento usando la función
    const descuento = calcularDescuento(cocheSeleccionado);

    // Mostrar el coche y el descuento
    document.getElementById('result').textContent = `Coche seleccionado: ${cocheSeleccionado}. Descuento aplicado: ${descuento}%.`;
});
