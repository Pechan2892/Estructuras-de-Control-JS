// Capturamos el formulario
const travelForm = document.getElementById('travelForm');

// Función para calcular el descuento basado en el origen y destino
function calcularDescuento(origen, destino) {
    let descuento = 0;

    if (origen === 'San Salvador' || origen === 'La Libertad') { // Capital cercana a Palma (ejemplo)
        switch (destino) {
            case 'Costa del Sol':
                descuento = 5; // 5% de descuento
                break;
            case 'Panchimalco':
                descuento = 10; // 10% de descuento
                break;
            case 'Puerto el Triunfo':
                descuento = 15; // 15% de descuento
                break;
            default:
                descuento = 0;
        }
    } else {
        descuento = 0; // Si el origen no es de las capitales designadas, no hay descuento
    }

    return descuento;
}

// Agregamos el evento de submit para calcular el descuento
travelForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener el origen y destino ingresados
    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;

    // Si no se seleccionó un destino o el origen está vacío, mostrar mensaje de error
    if (origen === "" || destino === "") {
        document.getElementById('result').textContent = "Por favor, selecciona un origen y un destino.";
        return;
    }

    // Calcular el descuento usando la función
    const descuento = calcularDescuento(origen, destino);

    // Mostrar el resultado
    if (descuento > 0) {
        document.getElementById('result').textContent = `Origen: ${origen}. Destino: ${destino}. Descuento aplicado: ${descuento}%.`;
    } else {
        document.getElementById('result').textContent = `No se aplica descuento para el origen y destino seleccionados.`;
    }
});
